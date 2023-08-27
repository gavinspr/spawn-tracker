type StyleSet = Record<string, any>;

type GlobalStyle = {
  colorSet: StyleSet;
  fontSet: StyleSet;
  defaultPageStyles: StyleSet;
  noHeader: number;
};

const _colorSet: StyleSet = {
  primaryColor: "#A75502",
  secondaryColor: "#DAA520",
  accentColor: "#FFFDE7",
  backgroundColor: "#228B22",
  blue: "#66a8e3",
  midBlue: "##246EE9",
  darkBlue: "#002699",
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

const _defaultPageStyles: StyleSet = {
  paddingLeft: 16,
  paddingRight: 16,
  flex: 1,
};

const GlobalStyles: GlobalStyle = {
  colorSet: _colorSet,
  fontSet: _fontSet,
  defaultPageStyles: _defaultPageStyles,
  noHeader: 120,
};

export default GlobalStyles;
