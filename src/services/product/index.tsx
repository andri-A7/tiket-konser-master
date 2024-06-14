import instance from "@/lib/axios/instance";
import { deleteUser, updateProfile } from "firebase/auth";

const productServices = {
  getAllProducts: () => instance.get("/api/product"),
};

export default productServices;
