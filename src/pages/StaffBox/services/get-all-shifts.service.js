import { supabase } from "../../../supabase/client";

export const getAllShiftsService = async (letter, roomId) => {
    const data = await supabase.from('shifts').select().eq('shiftLetter', letter).eq('roomId', roomId).order('id', { ascending: true })
    try {
        if (data.data.length !== 0) {
            return data
        } else {
            return null
        }
    }
    catch (err) {
        console.error(err.message)
    }
}