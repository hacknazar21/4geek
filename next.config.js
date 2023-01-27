module.exports = {
  rewrites: () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://77.240.38.204/api/:path*/",
      },
    ];
  },
};
