import React, { useEffect, useState } from "react";
import styles from "./cultureStyles";
import {
  ActivityIndicator,
  FlatList,
  Image,
  LayoutAnimation,
  Pressable,
  Text,
  View,
} from "react-native";
import { FloatingActionButton } from "../../components";
import Fontisto from "@expo/vector-icons/Fontisto";
import GlobalStyles from "../../constants/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../services";
import {
  CULTURE_SUBSTRATE_LIST,
  STATUS_COLORS,
  SubstrateListItemType,
} from "../../constants";
import {
  CultureStackParamList,
  CultureStatus,
  CultureSubstrate,
  CultureType,
  SupaBaseCultureType,
} from "../../@types";
import { StackNavigationProp } from "@react-navigation/stack";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useCultureContext } from "../../providers";

type CultureScreenScreenNavigationProp = StackNavigationProp<
  CultureStackParamList,
  "CultureHome"
>;

const substrateIcon = (
  cultureSubstrate: CultureSubstrate
): JSX.Element | null => {
  const substrate = CULTURE_SUBSTRATE_LIST.find(
    (s: SubstrateListItemType) => s.name === cultureSubstrate
  );

  return substrate?.icon ?? null;
};

const statusBadge = (status: CultureStatus): JSX.Element => {
  const badgeColor: string = STATUS_COLORS[status];

  return (
    <View style={{ ...styles.statusBadge, backgroundColor: badgeColor }}>
      <Text style={styles.statusBadgeText}>{status}</Text>
    </View>
  );
};

const calculateDaysPassed = (inoculation_date: string): string => {
  const inoculationDate: Date = new Date(inoculation_date);
  const currentDate: Date = new Date();

  const timeDifference: number =
    currentDate.getTime() - inoculationDate.getTime();
  const daysPassed: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return isNaN(daysPassed) ? "<1" : daysPassed.toString();
};

export const CultureScreen = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const { cultures, setCultures } = useCultureContext();
  const { navigate } = useNavigation<CultureScreenScreenNavigationProp>();

  useEffect(() => {
    fetchCultures();
  }, []);

  const fetchCultures = async () => {
    const { data, error } = await supabase.from("culture").select("*");

    if (error) {
      return console.error("Error fetching data:", error.message);
      // todo: display error toast
    } else {
      const formattedCultures: Array<CultureType> = data.map(
        (culture: SupaBaseCultureType) => ({
          ...culture,
          scientificName: {
            genus: culture.genus,
            species: culture.species,
          },
          substrate: {
            type: culture.substrate,
            description: culture.substrate_description,
          },
        })
      );
      setCultures(formattedCultures);
    }
  };

  const handleToggleFilter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <View style={styles.wrap}>
      {cultures === undefined ? (
        <View style={styles.spinnerWrap}>
          <ActivityIndicator
            size={100}
            color={GlobalStyles.colorSet.primaryColor}
          />
        </View>
      ) : (
        <>
          {cultures?.length === 0 ? (
            <View style={styles.noCulturesWrap}>
              <Image
                source={require("../../assets/no_culture.png")}
                resizeMode="contain"
                style={styles.noCulturesImage}
              />
              <Text style={styles.noCulturesText}>
                Oh No! You don't have any cultures yet!
              </Text>
              <Text style={styles.noCulturesText}>
                Tap here to add a culture
              </Text>
              <Image
                source={require("../../assets/bent_arrow.png")}
                resizeMode="contain"
                style={styles.noCulturesArrow}
              />
            </View>
          ) : (
            <>
              <View
                style={{
                  ...styles.filterHeader,
                  height: isFilterOpen ? "95%" : "auto",
                }}
              >
                <View
                  style={{
                    ...styles.filterWrap,
                    flex: isFilterOpen ? 1 : undefined,
                  }}
                >
                  <Pressable
                    style={styles.filterButton}
                    onPress={handleToggleFilter}
                  >
                    <Ionicons
                      style={{ marginLeft: "auto" }}
                      name="filter"
                      size={28}
                      color="white"
                    />
                    <Text style={styles.filterText}>Filters</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.bodyWrap}>
                {isFilterOpen ? (
                  <View style={styles.filterViewBody}>
                    <Text>Showing {cultures?.length} Cultures</Text>
                  </View>
                ) : (
                  <FlatList
                    data={cultures}
                    style={styles.flatList}
                    keyExtractor={(item: CultureType) => item.uuid}
                    renderItem={({ item, index }) => (
                      <View
                        key={item.uuid}
                        style={{
                          gap: 4,
                          marginTop: index === 0 ? 16 : undefined,
                          marginBottom:
                            index === cultures!.length - 1 ? 96 : undefined,
                        }}
                      >
                        <View>
                          <Text style={{ textAlign: "right" }}>
                            {item?.culture_id}
                          </Text>
                        </View>
                        <View style={styles.itemWrap}>
                          {substrateIcon(item.substrate.type)}
                          <View style={styles.nameWrap}>
                            <Text style={{ fontSize: 20 }}>
                              {item.culture_name}
                            </Text>
                            <View style={styles.scientificNameWrap}>
                              <Text style={styles.scientificNameText}>
                                {item.scientificName.genus}
                              </Text>
                              <Text style={styles.scientificNameText}>
                                {item.scientificName.species}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.detailsWrap}>
                            {statusBadge(item.status ?? "Inoculated")}
                            <Text style={styles.daysText}>
                              {calculateDaysPassed(item.date_inoculated)} Days
                              Old
                            </Text>
                          </View>
                          <Entypo
                            name="lab-flask"
                            size={24}
                            color="gray"
                            style={styles.icon}
                          />
                        </View>
                      </View>
                    )}
                  />
                )}
              </View>
            </>
          )}
          {!isFilterOpen && (
            <FloatingActionButton
              onPress={() => navigate("AddCulture")}
              icon={
                <Fontisto
                  name="injection-syringe"
                  size={26}
                  color={`${GlobalStyles.colorSet.accentColor}`}
                />
              }
            />
          )}
        </>
      )}
    </View>
  );
};
