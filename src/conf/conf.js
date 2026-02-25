const conf={
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteLinksCollectionId:String(import.meta.env.VITE_APPWRITE_LINKS_COLLECTION_ID),
    appwriteVotesCollectionId:String(import.meta.env.VITE_APPWRITE_VOTES_COLLECTION_ID),
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
};

export default conf