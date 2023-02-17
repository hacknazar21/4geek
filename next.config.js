module.exports = {
  rewrites: () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.telefonik.kz/api/:path*/",
      },
    ];
  },
};
