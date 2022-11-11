import { supabase } from "../../../supabase/client";

export const getTickets = async (id) => {
    const data = await supabase.from('shifts').select().eq("userId", id)
    try {
        return data
    }
    catch (err) {
        console.error(err.message)
    }
}