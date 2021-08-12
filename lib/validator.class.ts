import { rx } from "./rx.constants"

class VTTValidator {
    
    isVTT(text: string) {
        return rx.isVtt.test(text);
    }

}

export const validator = new VTTValidator()

