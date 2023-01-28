module.exports = {
  rewrites: () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.4geek.kz/api/:path*/",
      },
    ];
  },
};
