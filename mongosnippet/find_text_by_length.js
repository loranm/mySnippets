db.getCollection('pays').find({capital:{$exists:true}, $where : "this.capital.length > 16"})

