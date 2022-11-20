import { supabase } from "../../../supabase/client";

export const getShiftsOrderService = async (shiftLetter, roomId) => {
    const data = await supabase
        .from('shifts')
        .select()
        .eq("shiftLetter", shiftLetter)
        .eq("roomId", roomId)
        .eq("state", 'en proceso')
        .order('shiftNumber', { ascending: false })
        .limit(1)
    return data
}