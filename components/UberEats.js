// import { Entypo, Feather } from "@expo/vector-icons";
// import { faker } from "@faker-js/faker/locale/en";
// import { afterEach, describe, expect, it } from "vitest";
import * as React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

// faker.seed(10);

// const data = [...Array(20).keys()].map(() => ({
//   key: faker.DatatypeModule.uuid(),
//   job: faker.animal.crocodilia(),
// }));
// We might want other tests to *not* be seeded. This will re-seed our faker instance after each test.

// let data;
// afterEach(() => {
//   faker.seed();
// });

// describe("reverse array", () => {
//   it("should reverse the array", () => {
//     // Seed our faker instance with some static number.
//     faker.seed(10);
//     data = [...Array(20).keys()].map(() => ({
//       key: faker.DatatypeModule.uuid(),
//       job: faker.animal.crocodilia(),
//     }));
//     const title = faker.person.jobTitle();
//     const name = faker.person.fullName();
//     const animal = faker.animal.bear();

//     const array = [title, name, animal];

//     expect(array.reverse()).toStrictEqual([animal, name, title]);

//     // Expect our value to always match a generated snapshot.
//     expect(array.reverse()).toMatchSnapshot();
//   });
// });

function generateFakeData() {
  const randomUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  const animalsCrocodilia = ["Crocodile", "Alligator", "Gharial"];

  const fakeDataArray = [];
  for (let i = 0; i < 15; i++) {
    const randomAnimal =
      animalsCrocodilia[Math.floor(Math.random() * animalsCrocodilia.length)];

    const fakeData = {
      job: randomAnimal,
      key: randomUUID(),
    };

    fakeDataArray.push(fakeData);
  }

  return fakeDataArray;
}

const generatedDataArray = generateFakeData();

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;

export default function UberEats() {
  const ref = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [viewPosition, setViewPosition] = React.useState(0);
  // console.log(JSON.stringify(generatedDataArray, null, 2));
  const getItemLayout = (data, index) => ({
    length: 30,
    offset: 30,
    index,
  });
  React.useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: _spacing,
      viewPosition,
    });
  }, [index, viewPosition]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
        style={{ flexGrow: 0 }}
        ref={ref}
        initialScrollIndex={index}
        data={generatedDataArray}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingLeft: _spacing }}
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setIndex(fIndex);
              }}
            >
              <View
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                  backgroundColor:
                    fIndex === index ? _colors.active : _colors.inactive,
                }}
              >
                <Text style={{ color: "#36303F", fontWeight: "700" }}>
                  {item.job}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginTop: _spacing * 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#36303F",
              fontWeight: "700",
              marginBottom: _spacing,
            }}
          >
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: width / 2,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setViewPosition(0);
              }}
            >
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}
              >
                {/* <Entypo name='align-left' size={24} color='#36303F' /> */}
                <Text>{">"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setViewPosition(0.5 + 1);
              }}
            >
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}
              >
                {/* <Entypo
                  name="align-horizontal-middle"
                  size={24}
                  color="#36303F"
                /> */}
                <Text>{"H"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setViewPosition(1);
              }}
            >
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                }}
              >
                {/* <Entypo name="align-right" size={24} color="#36303F" /> */}
                <Text>{"<"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ color: "#36303F", fontWeight: "700", marginBottom: 10 }}
          >
            Navigation
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: width / 2,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (index === 0) {
                  return;
                }
                setIndex(index - 1);
              }}
            >
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}
              >
                {/* <Feather name="arrow-left" size={24} color="#36303F" /> */}
                <Text>{"<"}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (index === generatedDataArray.length - 1) {
                  return;
                }
                setIndex(index + 1);
              }}
            >
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: "#FCD259",
                  borderRadius: _spacing,
                }}
              >
                {/* <Feather name="arrow-right" size={24} color="#36303F" /> */}
                <Text>{">"}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
