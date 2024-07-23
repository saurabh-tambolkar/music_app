const {MONGODB_USERNAME,MONGODB_PASS} = process.env;
export const Mongo_Url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASS}@cluster0.gywfyet.mongodb.net/music_app_nextjs_db?retryWrites=true&w=majority`
