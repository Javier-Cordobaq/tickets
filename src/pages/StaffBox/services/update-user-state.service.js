import { supabase } from "../../../supabase/client";

export const updateUserStateService = async (id, estado, shiftLetter, shiftNumber, meetType) => {
    const { error } = await supabase
        .from('shifts')
        .update({ state: estado })
        .eq('userId', id)
        .eq('shiftLetter', shiftLetter)
        .eq('shiftNumber', shiftNumber)
        .eq('meetType', meetType)
    try {
        console.log('Hola')
    }
    catch (err) {
        console.error(err.message)
    }
}