import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./cultureFormStyles";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  LayoutAnimation,
  Alert,
  Switch,
} from "react-native";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { TextInput } from "@react-native-material/core"; // todo: replace with custom component
import GlobalStyles from "../../../../constants/GlobalStyles";
import {
  CULTURE_STATUS_LIST,
  CULTURE_SUBSTRATE_LIST,
  SubstrateListItemType,
} from "../../../../constants/";
import { SelectList } from "../../../../components/SelectList/SelectList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format, parse } from "date-fns";
import { capitalizeFirstLetter } from "../../../../utils/";
import { CultureSubstrate, FungiType, OptionType } from "../../../../@types";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type PropTypes = {
  fungi: Array<FungiType>;
  isAdvancedFieldsOpen: boolean;
  setIsAdvancedFieldsOpen: Dispatch<SetStateAction<boolean>>;
  commonNamesList: Array<OptionType>;
  genusNamesList: Array<OptionType>;
  speciesNamesList: Array<OptionType>;
  setSpeciesNamesList: Dispatch<SetStateAction<Array<OptionType>>>;
};

export const CultureForm = ({
  fungi,
  isAdvancedFieldsOpen,
  setIsAdvancedFieldsOpen,
  commonNamesList,
  genusNamesList,
  speciesNamesList,
  setSpeciesNamesList,
}: PropTypes) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [isSubstrateDetailsOpen, setIsSubstrateDetailsOpen] =
    useState<boolean>(false);

  const currentDate: string = format(new Date(), "yyyy-MM-dd ");

  const { setValue, getValues } = useFormContext();

  const commonNameWatcher: string = useWatch({
    name: "common_name",
  });

  const genusWatcher: string = useWatch({
    name: "scientificName.genus",
  });

  const speciesWatcher: string = useWatch({
    name: "scientificName.species",
  });

  const substrateWatcher: CultureSubstrate = useWatch({
    name: "substrate.type",
  });

  const dateInoculatedWatcher: string = useWatch({
    name: "date_inoculated",
    defaultValue: currentDate,
  });

  const handleSelectSubstrate = (substrate: CultureSubstrate) => {
    if (substrate === substrateWatcher) {
      setValue("substrate.type", undefined);
      return;
    }

    setValue("substrate.type", substrate);
  };

  const handlePopulateScientificName = () => {
    const selectedFungi: FungiType | undefined = fungi.find(
      (f: FungiType) => f.common_name === commonNameWatcher
    );

    if (selectedFungi) {
      setValue("scientificName.genus", selectedFungi.genus);
      setValue("scientificName.species", selectedFungi.species);
    }
  };

  const handleChangeGenusField = () => {
    const filteredSpeciesList: Array<OptionType> = fungi
      .filter((f: FungiType) => f.genus === genusWatcher)
      .map((f: FungiType, i: number) => ({ key: i, value: f.species }));

    setSpeciesNamesList(filteredSpeciesList);
  };

  const handleChangeSpeciesField = () => {
    const selectedSpecies: FungiType | undefined = fungi.find(
      (f: FungiType) => f.species === speciesWatcher
    );

    if (!selectedSpecies) return;

    setValue("scientificName.genus", selectedSpecies.genus);

    if (selectedSpecies.common_name)
      setValue("common_name", selectedSpecies.common_name);
  };

  const handleDatePickerActions = (
    datePickerEvent: DateTimePickerEvent,
    date: Date | undefined
  ) => {
    setIsDatePickerOpen(false);

    if (datePickerEvent.type === "set" && date) {
      setValue("date_inoculated", format(date, "yyyy-MM-dd"));
    }
  };

  const handleToggleSubstrateDetails = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (isSubstrateDetailsOpen) {
      if (getValues("substrate.details")) {
        Alert.alert(
          "Removing Substrate Details",
          "Are you sure you wish to remove substrate details?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                setValue("substrate.details", "");
                setIsSubstrateDetailsOpen(false);
                return;
              },
            },
          ]
        );
      } else {
        setIsSubstrateDetailsOpen(false);
      }
    }

    if (!isSubstrateDetailsOpen) setIsSubstrateDetailsOpen(true);

    return;
  };

  const handleToggleAdvancedOptions = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsAdvancedFieldsOpen(!isAdvancedFieldsOpen);
  };

  return (
    <ScrollView>
      <View style={styles.formWrap}>
        <View style={styles.formInputGroup}>
          <Text style={styles.formInputGroupHeader}>Name</Text>
          <Controller
            rules={{ required: true }}
            name="culture_name"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Culture Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                variant="outlined"
                color={GlobalStyles.colorSet.primaryColor}
              />
            )}
          />
          <Controller
            name="common_name"
            render={({ field: { onChange, onBlur } }) => (
              <SelectList
                placeholder="Common Name"
                defaultOption={commonNameWatcher}
                onSelect={handlePopulateScientificName}
                setSelected={onChange}
                searchPlaceholder="Search or enter custom name"
                data={commonNamesList}
                allowCustomOption
                arrowicon={<></>}
                closeicon={
                  <MaterialCommunityIcons
                    name="chevron-up"
                    size={22}
                    color={GlobalStyles.colorSet.primaryColor}
                  />
                }
                save="value"
                inputStyles={GlobalStyles.componentSet.SelectList.inputStyles}
                boxStyles={GlobalStyles.componentSet.SelectList.boxStyles}
                searchStyles={GlobalStyles.componentSet.SelectList.searchStyles}
              />
            )}
          />
          <Controller
            rules={{ required: true }}
            name="scientificName.genus"
            render={({ field: { onChange, onBlur } }) => (
              <SelectList
                placeholder="Genus"
                defaultOption={genusWatcher}
                onSelect={handleChangeGenusField}
                setSelected={onChange}
                searchPlaceholder="Search or enter custom genus"
                data={genusNamesList}
                allowCustomOption
                arrowicon={<></>}
                closeicon={
                  <MaterialCommunityIcons
                    name="chevron-up"
                    size={22}
                    color={GlobalStyles.colorSet.primaryColor}
                  />
                }
                save="value"
                inputStyles={GlobalStyles.componentSet.SelectList.inputStyles}
                boxStyles={GlobalStyles.componentSet.SelectList.boxStyles}
                searchStyles={GlobalStyles.componentSet.SelectList.searchStyles}
              />
            )}
          />
          <Controller
            rules={{ required: true }}
            name="scientificName.species"
            render={({ field: { onChange, onBlur } }) => (
              <SelectList
                placeholder="species"
                defaultOption={speciesWatcher}
                onSelect={handleChangeSpeciesField}
                setSelected={onChange}
                searchPlaceholder="Search or enter custom species"
                data={speciesNamesList}
                allowCustomOption
                arrowicon={<></>}
                closeicon={
                  <MaterialCommunityIcons
                    name="chevron-up"
                    size={22}
                    color={GlobalStyles.colorSet.primaryColor}
                  />
                }
                save="value"
                inputStyles={GlobalStyles.componentSet.SelectList.inputStyles}
                boxStyles={GlobalStyles.componentSet.SelectList.boxStyles}
                searchStyles={GlobalStyles.componentSet.SelectList.searchStyles}
              />
            )}
          />
        </View>
        <View style={styles.formInputGroup}>
          <Text style={styles.formInputGroupHeader}>Details</Text>
          <View>
            <Controller
              name="date_inoculated"
              rules={{ required: true }}
              defaultValue={currentDate.toString()}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Date Inoculated"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  variant="outlined"
                  color={GlobalStyles.colorSet.primaryColor}
                  onPressIn={() => setIsDatePickerOpen(true)}
                  showSoftInputOnFocus={false} // Prevent keyboard coming up
                />
              )}
            />
            {isDatePickerOpen && (
              <DateTimePicker
                value={parse(dateInoculatedWatcher, "yyyy-MM-dd", new Date())}
                display="spinner"
                onChange={handleDatePickerActions}
              />
            )}
          </View>
          <Controller
            name="origin"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Origin"
                placeholder="Origin (optional)"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                variant="outlined"
                color={GlobalStyles.colorSet.primaryColor}
              />
            )}
          />
          <Controller
            name="description"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Description"
                placeholder="Description (optional)"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                variant="outlined"
                color={GlobalStyles.colorSet.primaryColor}
                multiline
              />
            )}
          />
        </View>
        <View style={styles.formInputGroup}>
          <View>
            <Pressable
              style={styles.substrateToggle}
              onPress={handleToggleSubstrateDetails}
            >
              <Text style={styles.formInputGroupHeader}>Substrate</Text>
              <MaterialCommunityIcons
                name={isSubstrateDetailsOpen ? "chevron-up" : "chevron-down"}
                size={24}
              />
            </Pressable>
            {isSubstrateDetailsOpen && (
              <Controller
                name="substrate.details"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Substrate Details"
                    placeholder="Substrate Details (optional)"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    variant="outlined"
                    color={GlobalStyles.colorSet.primaryColor}
                    multiline
                    style={{ marginTop: 8 }}
                  />
                )}
              />
            )}
          </View>
          <View style={styles.substrateGroupWrap}>
            {CULTURE_SUBSTRATE_LIST.map(
              (sub: SubstrateListItemType, index: number) => (
                <Pressable
                  key={index}
                  style={{
                    ...styles.substrateInput,
                    backgroundColor:
                      substrateWatcher === sub.name
                        ? GlobalStyles.colorSet.primaryColor
                        : undefined,
                  }}
                  onPress={() => handleSelectSubstrate(sub.name)}
                >
                  {sub.icon}
                  <Text
                    style={{
                      fontSize: 18,
                      color:
                        substrateWatcher === sub.name ? "white" : undefined,
                    }}
                  >
                    {capitalizeFirstLetter(sub.name)}
                  </Text>
                </Pressable>
              )
            )}
          </View>
        </View>
        <Pressable
          style={{
            ...styles.advancedFieldsButton,
            marginBottom: isAdvancedFieldsOpen ? 0 : 12,
          }}
          onPress={handleToggleAdvancedOptions}
        >
          <Text style={{ fontSize: 16 }}>Advanced Fields</Text>
          <MaterialCommunityIcons
            name={isAdvancedFieldsOpen ? "chevron-up" : "chevron-down"}
            size={24}
          />
        </Pressable>
        {isAdvancedFieldsOpen && (
          <>
            <View style={styles.advancedFieldsWrap}>
              <View style={styles.isolatedWrap}>
                <Text style={{ fontSize: 16 }}>Is isolated culture?</Text>
                <Controller
                  defaultValue={false}
                  name="is_isolated"
                  render={({ field: { onChange, value } }) => (
                    <Switch
                      trackColor={{
                        false: "#767577",
                        true: GlobalStyles.colorSet.blue,
                      }}
                      thumbColor={
                        value ? GlobalStyles.colorSet.midBlue : "#f4f3f4"
                      }
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={(v: boolean) => onChange(v)}
                      value={value}
                    />
                  )}
                />
              </View>
              <Controller
                name="culture_id"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Custom Culture ID"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    variant="outlined"
                    color={GlobalStyles.colorSet.primaryColor}
                  />
                )}
              />
              <Controller
                name="status"
                render={({ field: { onChange, onBlur } }) => (
                  <SelectList
                    placeholder="Status"
                    defaultOption={CULTURE_STATUS_LIST[0]}
                    setSelected={onChange}
                    data={CULTURE_STATUS_LIST}
                    allowCustomOption
                    arrowicon={<></>}
                    closeicon={
                      <MaterialCommunityIcons
                        name="chevron-up"
                        size={22}
                        color={GlobalStyles.colorSet.primaryColor}
                      />
                    }
                    save="value"
                    search={false}
                    inputStyles={
                      GlobalStyles.componentSet.SelectList.inputStyles
                    }
                    boxStyles={GlobalStyles.componentSet.SelectList.boxStyles}
                  />
                )}
              />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};
