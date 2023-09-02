type StyleSet = Record<string, any>;

type GlobalStyle = {
  colorSet: StyleSet;
  fontSet: StyleSet;
  miscSet: StyleSet;
  defaultPageStyles: StyleSet;
};

const _colorSet: StyleSet = {
  primaryColor: "#A75502",
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

// todo: change name
const _miscSet: StyleSet = {
  noHeader: {
    paddingTop: 120,
  },
};

const _defaultPageStyles: StyleSet = {
  paddingLeft: 8,
  paddingRight: 8,
  flex: 1,
};

const GlobalStyles: GlobalStyle = {
  colorSet: _colorSet,
  fontSet: _fontSet,
  miscSet: _miscSet,
  defaultPageStyles: _defaultPageStyles,
};

export default GlobalStyles;
