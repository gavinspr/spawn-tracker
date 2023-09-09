type StyleSet = Record<string, any>;

type GlobalStyle = {
  colorSet: StyleSet;
  fontSet: StyleSet;
  componentSet: StyleSet;
  defaultPageStyles: StyleSet;
};

/* 
Mushroom Theme:
primary: #A75502
secondary: #DAA520
accent: #FFFDE7
background: #228B22
bruise blue: #66a8e3

Light Theme:
primary: #826699

Dark Theme: 
#0a0a0a
#1c1a1b
#3d3c4a
#989795
#ddd8d4

*/

const _colorSet: StyleSet = {
  // primaryColor: "#A75502",
  primaryColor: "#826699",
  secondaryColor: "#DAA520",
  accentColor: "#FFFDE7",
  backgroundColor: "#228B22",
  blue: "#66a8e3",
  midBlue: "#246EE9",
  darkBlue: "#002699",
  bgShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
};

const _fontSet: StyleSet = {
  h1: { fontSize: 36, fontWeight: "600" },
  h2: {
    fontSize: 24,
    fontWeight: "600",
  },
  h3: {
    fontSize: 18,
  },
};

const _componentSet: StyleSet = {
  SelectList: {
    inputStyles: { fontSize: 16, marginLeft: -3 },
    boxStyles: {
      borderRadius: 4,
      paddingVertical: 16,
      marginBottom: 2,
    },
    searchStyles: {
      borderColor: _colorSet.primaryColor,
      borderWidth: 2,
    },
  },
};

const _defaultPageStyles: StyleSet = {
  paddingHorizontal: 16,
  flex: 1,
};

const GlobalStyles: GlobalStyle = {
  colorSet: _colorSet,
  fontSet: _fontSet,
  componentSet: _componentSet,
  defaultPageStyles: _defaultPageStyles,
};

export default GlobalStyles;
