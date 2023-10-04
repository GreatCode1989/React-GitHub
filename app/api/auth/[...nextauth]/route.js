import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientProvider: "4461c48b48ab552318c8",
            clientSecret: "cf7be2ff7bef5dc4f41a44e73e43f206fda9336e"
        })
    ]
})

export {handler as GET, handler as POST}