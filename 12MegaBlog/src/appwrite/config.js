/* eslint-disable no-unused-vars */
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwritProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID}) {
    try {
      return await this.databases.createDocument(
        conf.appwritDatabaseId,
        conf.appwritCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      )
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      throw error
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwritDatabaseId,
        conf.appwritCollectionId,
        slug,
        {
          content,
          featuredImage,
          status,
          title,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwritDatabaseId,
                conf.appwritCollectionId,
                slug
            )

            // eslint-disable-next-line no-unreachable
            return true;

        } catch (error) {
            console.log("Appwrite service :: deleteDocument :: error ", error)
            return false
        }
    }

    async getPost(slug){
        try {

            return await this.databases.getDocument(
                conf.appwritDatabaseId,
                conf.appwritCollectionId,
                slug
            )

            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwritDatabaseId,
                conf.appwritCollectionId,
                queries,

            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false
            
        }
    }

    async uploadFile(file){
        try {

        return await this.bucket.createFile(
            conf.appwritBucketId,
            ID.unique(),
            file
        )
            

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error)
            
        }
    }
    
    async deleteFile(fileId){
        try {
            
            await this.bucket.deleteFile(
                conf.appwritBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    getFilePreview(FileId){
        return this.bucket.getFilePreview(
            conf.appwritBucketId,
            FileId
        )
    }
}

const service = new Service();
export default service;
