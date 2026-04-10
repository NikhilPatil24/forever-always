import FloralConfetti from "@/components/FloralConfetti";
import NavBar from "@/components/NavBar";
import DetailsSection from "@/components/sections/DetailsSection";
import ExtrasSection from "@/components/sections/ExtrasSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import RSVPSection from "@/components/sections/RSVPSection";
import TimelineSection from "@/components/sections/TimelineSection";
import VenueSection from "@/components/sections/VenueSection";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Wedding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloralConfetti />
      <NavBar />
      <main>
        <HeroSection />
        <DetailsSection />
        <TimelineSection />
        <VenueSection />
        <RSVPSection />
        <ExtrasSection />
      </main>
      <FooterSection />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wedding />
    </QueryClientProvider>
  );
}
