
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export default NextAuth({
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    // callbacks: {
    //   async signIn(user, account, profile) {
    //     // Add custom logic to handle user sign-in
    //     return true;
    //   },
    // },
    // Add other options as needed
  });
  