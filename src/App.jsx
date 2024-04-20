import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import { CryptoContextProvider } from "./Context";
import CryptoDetails from "./pages/CryptoDetails";
import Community from "./pages/Community";
import PageNotFound from "./pages/PageNotFound";
import Markets from "./pages/Markets";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * (60 * 100),
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <CryptoContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="crypto" element={<Crypto />} />
              <Route path="community" element={<Community />} />
              <Route path="markets" element={<Markets />} />
              <Route path="crypto/:name" element={<CryptoDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CryptoContextProvider>
    </QueryClientProvider>
  );
}

export default App;
