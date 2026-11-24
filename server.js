const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const driverRoutes = require("./routes/driverRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const fuelRequestRoutes = require("./routes/fuelRequestRoutes");
const adminRoutes = require("./routes/adminRoutes");
const verificationRoutes = require("./routes/verificationRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/fuel-requests", fuelRequestRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/verification", verificationRoutes);
connectDB();

// Test Route
app.get("/", (req, res) => {
    res.send("Fuel Rescue Backend is Running!");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});