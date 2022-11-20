import { supabase } from "../supabase/client"

export const getRoomInformationService = async (id) => {
    const data = await supabase.from('room').select().eq("roomId", id)
    try {
        if (data.data.length !== 0) {
            return data
        }
    }
    catch (err) {
        console.error(err.message)
    }
}