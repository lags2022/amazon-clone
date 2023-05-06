import Register from "@/components/Register";
import LoginStyles from "@/components/LoginStyles";

export default function register() {
  return (
    <main className="h-screen bg-gray-200 flex">
      <LoginStyles>
        <Register />
      </LoginStyles>
    </main>
  );
}
