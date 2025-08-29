const theme = {
  colors: {
    primary: "bg-gradient-to-br from-blue-500 to-purple-600",
    background: "bg-gradient-to-b from-gray-950 via-gray-900 to-black",
    card: "bg-gray-900/40 backdrop-blur-sm",
    text: {
      heading: "text-white font-bold",
      sub: "text-gray-300",
      muted: "text-gray-400",
    },
    accent: "text-purple-500",
    rating: "text-yellow-400",
    primaryBackground:
      "border-gray-800 bg-gradient-to-b from-gray-900/95 to-black/95",
  },
  radius: {
    card: "rounded-2xl",
    button: "rounded-lg",
    dropdown: "rounded-lg",
  },
  transition: {
    base: "transition duration-500",
    img: "transition-transform duration-500 group-hover:scale-100",
    overlay:
      "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  },
  dropdown: {
    container: "relative",
    select: {
      colors:
        "border-gray-600 bg-gray-900 text-white focus:border-[#6565cd] focus:ring-1 focus:ring-[#6565cd]",
      default:
        "w-full cursor-pointer appearance-none rounded-lg border border-gray-600 bg-gray-900 px-4 py-3 pr-10 text-sm text-white transition focus:border-[#6565cd] focus:ring-1 focus:ring-[#6565cd] focus:outline-none sm:text-base",
    },
    icon: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400",
  },
  display: {
    gradient:
      "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.3),rgba(0,0,0,0.8))",
    button:
      "cursor-pointer rounded-lg px-5 py-3 mt-5 text-sm font-semibold text-white transition-transform hover:scale-105 sm:text-base",
    buttonGradient: "bg-gradient-to-r from-purple-600 to-blue-600",
    text: {
      title:
        "text-2xl leading-tight font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
      overview: "text-sm text-gray-300 sm:text-base md:text-lg lg:text-xl",
      meta: "text-sm text-gray-200 sm:text-base",
      accent: "text-sm text-yellow-500 sm:text-base",
    },
  },
  sidebar: {
    overlay: "bg-opacity-50 fixed inset-0 z-40 bg-black lg:hidden",
    container:
      "fixed top-0 left-0 z-50 flex h-full w-72 flex-col border-r border-r-gray-800 shadow-xl backdrop-blur-lg transition-transform duration-300 ease-in-out lg:static",
    mobileOpen: "transform translate-x-0 lg:translate-x-0",
    mobileClosed: "-translate-x-full lg:translate-x-0",
    header: {
      base: "flex h-16 items-center justify-between border-b border-gray-800 px-6",
      title: "flex items-center gap-2 text-xl font-extrabold text-white",
      closeButton:
        "rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-blue-500 lg:hidden",
    },
    navigation: {
      container: "flex-1 overflow-y-auto p-6",
      sectionHeader:
        "border-b border-gray-700 pb-2 text-sm font-semibold tracking-wide text-gray-400 uppercase mb-4",
      linkBase:
        "flex items-center gap-2 rounded-md px-4 py-2 font-medium transition-all duration-300",
      linkActive:
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md",
      linkInactive: "text-gray-300 hover:bg-gray-800 hover:text-white",
      divider: "my-6 border-t border-gray-700",
    },
  },
  header: {
    base: "sticky top-0 z-30 border-b border-gray-800 bg-gray-900/70 backdrop-blur-lg",
    container: "w-full px-4 sm:px-6 lg:px-8",
    inner: "flex h-16 items-center justify-between",
    search: {
      container:
        "relative flex h-full w-full max-w-[720px] items-center justify-center px-2",
      icon: "absolute left-5 h-5 w-5 text-zinc-400",
      inputBase:
        "w-full rounded-lg border bg-zinc-800 px-5 py-2 pl-10 text-white placeholder:text-zinc-400 focus:border-purple-500",
      inputClear:
        "absolute right-5 h-5 w-5 rotate-45 cursor-pointer text-zinc-400 hover:text-purple-400",
      resultsContainer:
        "absolute top-[100%] right-0 left-0 mx-auto max-h-[60vh] w-full overflow-y-auto rounded-lg border border-zinc-700 bg-zinc-900/95 shadow-lg backdrop-blur-md",
      resultsItem:
        "flex w-full items-start gap-4 border-b border-zinc-800 p-3 text-white transition-colors hover:bg-purple-600/20",
      resultsTitle:
        "line-clamp-1 text-sm font-semibold text-white sm:text-base",
      resultsDescription: "mt-1 line-clamp-2 text-xs text-gray-400 sm:text-sm",
    },
    userButton:
      "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-500",
  },
};

export default theme;
