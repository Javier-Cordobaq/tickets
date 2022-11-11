import { supabase } from "../../../supabase/client";

export const getUsers = async (id) => {
    const data = await supabase.from('shifts').select().eq("roomId", id)
    try {
        return data
    }
    catch (err) {
        console.error(err.message)
    }
}