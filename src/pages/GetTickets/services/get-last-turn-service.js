import { supabase } from "../../../supabase/client";

export const getLastTurnService = async (shiftLetter) => {
    const { error, data } = await supabase.from('shifts').select().eq("shiftLetter", shiftLetter).order('shiftNumber', { ascending: false }).limit(1)
    if (error) return null
    return data
}