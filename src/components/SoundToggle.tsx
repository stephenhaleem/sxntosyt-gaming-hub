
import React, { useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useSoundContext } from "@/contexts/SoundContext";

const SoundToggle = () => {
  const { soundEnabled, toggleSound } = useSoundContext();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md p-2 rounded-full border border-gaming-purple/50">
      {soundEnabled ? (
        <Volume2 size={20} className="text-gaming-purple" />
      ) : (
        <VolumeX size={20} className="text-gray-400" />
      )}
      <Switch
        checked={soundEnabled}
        onCheckedChange={toggleSound}
        className="data-[state=checked]:bg-gaming-purple"
      />
    </div>
  );
};

export default SoundToggle;
