import React, { useEffect, useState } from "react";
import styles from "./addCultureStyles";
import { Pressable, Text, View } from "react-native";
import {
  FormProvider,
  SubmitErrorHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { CultureType, FungiType, OptionType } from "../../../@types";
import { supabase } from "../../../services";
import { CultureForm } from "./CultureForm/CultureForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const AddCultureScreen = () => {
  const [fungi, setFungi] = useState<Array<FungiType>>([]);
  const [commonNamesList, setCommonNamesList] = useState<Array<OptionType>>([]);
  const [genusNamesList, setGenusNamesList] = useState<Array<OptionType>>([]);
  const [speciesNamesList, setSpeciesNamesList] = useState<Array<OptionType>>(
    []
  );
  const [isAdvancedFieldsOpen, setIsAdvancedFieldsOpen] =
    useState<boolean>(false);

  const { navigate } = useNavigation<any>(); // todo:

  const methods: UseFormReturn<CultureType, any> = useForm<CultureType>();

  const {
    handleSubmit,
    reset,
    formState: { errors }, // todo: handle errors
  } = methods;

  useEffect(() => {
    fetchFungi();
  }, []);

  const fetchFungi = async () => {
    const { data, error } = await supabase.from("fungi").select("*");

    if (error) {
      return console.error("Error fetching data:", error.message);
      // todo: display error toast
    } else {
      setFungi(data);
    }

    // Get array of common names
    const commonNames: Array<OptionType> = data
      .filter((fungi: FungiType) => fungi.common_name !== null)
      .map((fungi: FungiType, index: number) => ({
        key: index,
        value: fungi.common_name as string,
      }));

    setCommonNamesList(commonNames);

    // Get unique array of genus names
    const genusNames: Array<OptionType> = Array.from(
      new Set(data.map((fungi: FungiType) => fungi.genus))
    )
      .map((genus: string, index: number) => ({
        key: index,
        value: genus,
      }))
      .sort((a, b) => a.value.localeCompare(b.value));

    setGenusNamesList(genusNames);

    // Get unique array of species names
    let speciesNames: Array<OptionType> = Array.from(
      new Set(data.map((fungi: FungiType) => fungi.species))
    )
      .map((species: string, index: number) => ({
        key: index,
        value: species,
      }))
      .sort((a, b) => a.value.localeCompare(b.value));

    speciesNames = Array.from(new Set(speciesNames));

    setSpeciesNamesList(speciesNames);
  };

  const onSubmit = async (values: CultureType) => {
    // todo: check culture_id for uniqueness (does sb/db already do this?)

    const { data, error } = await supabase.from("culture").insert([
      {
        culture_name: values.culture_name,
        common_name: values.common_name,
        genus: values.scientificName.genus,
        species: values.scientificName.species,
        cultureID: values.culture_id,
        substrate: values.substrate.type,
        substrate_description: values.substrate.description,
        date_inoculated: values.date_inoculated,
        status: values.status,
        origin: values.origin,
        description: values.description,
        is_isolated: values.is_isolated,
      },
    ]);

    if (error) {
      return console.error("Error inserting data:", error.message);
    } else {
      console.log(data, "Data inserted successfully:");
    }

    // todo: when a genus OR species is added that is not in db send to admin to db approval

    // Clear form and navigate back to culture screen
    reset();
    setIsAdvancedFieldsOpen(false);
    navigate("CultureScreen");
  };

  const onError: SubmitErrorHandler<any> = (err) => {
    console.log(err, "err");

    return;
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.headerWrap}>
        <Pressable onPress={() => navigate("CultureScreen")}>
          <MaterialCommunityIcons name="arrow-left" size={24} />
        </Pressable>
        <Text style={styles.header}>New Culture</Text>
        <Pressable onPress={handleSubmit(onSubmit, onError)}>
          <Text style={styles.save}>Save</Text>
        </Pressable>
      </View>
      <FormProvider {...methods}>
        <CultureForm
          fungi={fungi}
          isAdvancedFieldsOpen={isAdvancedFieldsOpen}
          setIsAdvancedFieldsOpen={setIsAdvancedFieldsOpen}
          commonNamesList={commonNamesList}
          genusNamesList={genusNamesList}
          speciesNamesList={speciesNamesList}
          setSpeciesNamesList={setSpeciesNamesList}
        />
      </FormProvider>
    </View>
  );
};
