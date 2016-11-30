
db.collection.find({},{user:1,bestScore:1}).sort({bestScore:-1}).limit(5);
