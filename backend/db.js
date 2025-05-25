const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Lasya:lasyamanasa@cluster0.rhcpjpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Mongo Error:", err));
