module.exports = {
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/bnb",

    STRIPE_API_KEY: "pk_test_FlqAZYGkGiQQUZwIZc63t7Mm00c0cCP38A",

    STRIPE_SECRET_KEY: "sk_test_OEQiImtrCkrWTJk0Bl8coLEK00hTfMeN67",

    STRIPE_WEBHOOK_SECRET: "whsec_68dJHFqIu9LH7eZleGkALELATgzrXKfp",

    CLOUDINARY_CLOUD_NAME: "barbarjinks",
    CLOUDINARY_API_KEY: "751394246942615",
    CLOUDINARY_API_SECRET: "zJWNKD-D4QZT4boijsN43WDRbAQ",

    SMTP_HOST: 'smtp.mailtrap.io"',
    SMTP_PORT: "2525",
    SMTP_USER: "f5c4edd0d054c3",
    SMTP_PASSWORD: "bd67b3f2ab8f51",
    SMTP_FROM_NAME: "BooKIT",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
