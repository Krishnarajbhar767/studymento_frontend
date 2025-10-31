import { useEffect, useState } from "react";
import { DeviceType } from "../types/general.types";

// Hook For get Current Device Name
export const useDevice = (): DeviceType => {
    const [device, setDevice] = useState<DeviceType>("desktop");
    // Function For Detect Device  Is it  ? Mobile Desktop Or  Tablet.
    const detectDevice = () => {
        // Get Current  Width From Window  Global Object
        const width: number = window.innerWidth;
        // Chek Which Device Is Currently Active
        if (width < 768) {
            setDevice("mobile");
        } else if (width < 1024) {
            setDevice("tablet");
        } else {
            setDevice("desktop");
        }
    };

    useEffect(() => {
        // Intial  Call Detect Device Function For Detect Device
        detectDevice();
        // Add Event Listener  On Window.resise For Detect Device When Width Changes
        window.addEventListener("resize", detectDevice);
        // Clean  Add.eventListenr  Whenerver  The Page unmount
        return window.removeEventListener("resize", detectDevice);
    }, []);

    return device;
};
