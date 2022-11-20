import { supabase } from "../../../supabase/client";

export const getLastTurnService = async (shiftLetter, meetType, roomId) => {
    const { error, data } = await supabase
        .from('shifts')
        .select()
        .eq("shiftLetter", shiftLetter)
        .eq("meetType", meetType)
        .eq("roomId", roomId)
        .order('shiftNumber', { ascending: false }).limit(1)
    if (error) return null
    return data
}