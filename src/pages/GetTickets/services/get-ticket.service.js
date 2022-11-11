import { supabase } from "../../../supabase/client";

export const getTicketService = async (id, shiftLetter, shiftNumber) => {
    const data = await supabase.from('shifts').select().eq("userId", id).eq("shiftLetter", shiftLetter).eq("shiftNumber", shiftNumber)
    try {
        return data
    }
    catch (err) {
        console.error(err.message)
    }
}