//Light Shadows
const shadowColors = {
  light:'#181B1F',
  dark:'101214',
}
export const shadows = {
    Xsmall: {
        shadowColor: shadowColors.light,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 1,
      },
      Small: {
        shadowColor: shadowColors.light,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
      },
      Regular: {
        shadowColor: shadowColors.light,
        shadowOffset: { width: 0, height: 4, },
         shadowOpacity: 0.08,
         shadowRadius: 6,
         elevation: 8
      },
      Medium: {
        shadowColor: shadowColors.light,
        shadowOffset: { width: 0, height: 8, },
         shadowOpacity: 0.12,
         shadowRadius: 16,
         elevation: 16
      },
      Large: {
        shadowColor: shadowColors.light,
        shadowOffset: { width: 0, height: 20, },
         shadowOpacity: 0.12,
         shadowRadius: 24,
         elevation: 40
      },
      XLarge: {
        shadowColor: shadowColors.light,
        shadowOffset: { width: 0, height: 24, },
         shadowOpacity: 0.24,
         shadowRadius: 48,
         elevation: 48
      }
}

//Dark Shadows
export const shadowsDark = {
    Xsmall: {
        shadowColor: shadowColors.dark,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.64,
        shadowRadius: 2,
        elevation: 1,
      },
      Small: {
        shadowColor: shadowColors.dark,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.64,
        shadowRadius: 4,
        elevation: 2,
      },
      Regular: {
        shadowColor: shadowColors.dark,
        shadowOffset: { width: 0, height: 4, },
         shadowOpacity: 0.64,
         shadowRadius: 6,
         elevation: 8
      },
      Medium: {
        shadowColor: shadowColors.dark,
        shadowOffset: { width: 0, height: 8, },
         shadowOpacity: 0.64,
         shadowRadius: 16,
         elevation: 16
      },
      Large: {
        shadowColor: shadowColors.dark,
        shadowOffset: { width: 0, height: 20, },
         shadowOpacity: 0.64,
         shadowRadius: 24,
         elevation: 40
      },
      XLarge: {
        shadowColor: shadowColors.dark,
        shadowOffset: { width: 0, height: 24, },
         shadowOpacity: 0.64,
         shadowRadius: 48,
         elevation: 48
      }
}