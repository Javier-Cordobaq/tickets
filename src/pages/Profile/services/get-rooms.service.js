import { supabase } from "../../../supabase/client";

export const getRooms = async (id) => {
    const data = await supabase.from('room').select().eq("creatorId", id)
    try {
        return data
    }
    catch (err) {
        console.error(err.message)
    }
}