import { supabase } from "../../../supabase/client";

export const getRoomDetailsService = async (id) => {
    const data = await supabase.from('room').select().eq("roomId", id)
    try {
        return data
    }
    catch (err) {
        console.error(err.message)
    }
}