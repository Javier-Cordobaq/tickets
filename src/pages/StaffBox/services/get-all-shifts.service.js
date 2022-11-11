import { supabase } from "../../../supabase/client";

export const getAllShiftsService = async (letter) => {
    const data = await supabase.from('shifts').select().eq('shiftLetter', letter)
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