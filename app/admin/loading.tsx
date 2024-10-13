import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="flex justify-center">
      <Loader2 className="size-16 animate-spin h-screen" />
    </div>
  );
}
