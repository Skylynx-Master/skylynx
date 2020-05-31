/* eslint-disable no-undef */
import { useState } from "react";

const apiUrl = "http://localhost:8000/api/v1";

export function useAuth() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function signIn(data) {
    try {
      setLoading(true);
      setError("");
      setData({});
      const headers = {
        // prettier-ignore
        'Accept': 'application/json',
        "Content-Type": "application/json",
      };
      const body = JSON.stringify(data);

      const response = await fetch(apiUrl + "/users/login/", {
        method: "POST",
        headers,
        body,
      });
      if (response.ok) {
        const result = await response.json();
        setData(result.data);
        setError("");
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function signUp(data) {
    try {
      setLoading(true);
      setError("");
      setData({});
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      // const body = JSON.stringify(data);
      const response = await fetch(apiUrl + "/users/signup/", {
        mode: "no-cors",
        method: "POST",
        headers,
        body,
        credentials: "include",
      });
      const result = await response.json();
      if (response.ok) {
        setData(result);
        setError("");
        return "success";
      } else {
        setError(response.statusText);
        return "error:", error;
      }
    } catch (error) {
      setError(error.message);
      return "error:", error;
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    signIn,
    signUp,
  };
}
