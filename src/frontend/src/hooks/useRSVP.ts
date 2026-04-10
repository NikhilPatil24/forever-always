import type { RSVPFormData } from "@/types/wedding";
import { useMutation } from "@tanstack/react-query";

// Backend does not expose RSVP methods yet — mutations are stubbed with local state
// When backend exposes submitRSVP, wire actor.submitRSVP(data) here
export function useSubmitRSVP() {
  return useMutation<void, Error, RSVPFormData>({
    mutationFn: async (data: RSVPFormData) => {
      // Simulated submission — replace with actor.submitRSVP(data) when available
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));
      console.log("RSVP submitted:", data);
    },
  });
}
