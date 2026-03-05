import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";
import { Row } from "../components/Row";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Address = {
  id: number;
  name: string;
  description?: string | null;
  lat: number;
  lng: number;
  createdAt: string;
};

const Card = styled.article`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 12px;
  background: #ffffff;

  & > h3 {
    margin: 0;
    font-size: 1rem;
  }
`;

const Small = styled.p`
  margin-top: 6px;
  font-size: 0.9rem;
  opacity: 0.85;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export function DashboardPage() {
  const [items, setItems] = useState<Address[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);

  function getAuthHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }

  async function loadAddresses() {
    try {
      setLoading(true);
      const { data } = await axios.get<{ items: Address[] }>("/api/addresses", {
        headers: getAuthHeaders(),
      });
      setItems(Array.isArray(data?.items) ? data.items : []);
    } catch {
      toast.error("Unable to load addresses");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAddresses();
  }, []);

  async function onAddAddress(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.target);
    const json = {
      name: form.get("name"),
      searchWord: form.get("searchWord"),
      description: form.get("description"),
    };

    try {
      setSaving(true);
      const { data } = await axios.post<{ item?: Address }>("/api/addresses", json, {
        headers: getAuthHeaders(),
      });
      if (data?.item?.id) {
        toast.success("Address added");
        (e.target as HTMLFormElement).reset();
        await loadAddresses();
      } else {
        toast.error("Unable to add address");
      }
    } catch {
      toast.error("Unable to add address");
    } finally {
      setSaving(false);
    }
  }

  function onSignout() {
    sessionStorage.clear();
    localStorage.clear();
    location.href = "/";
  }

  return (
    <Layout title="Dashboard">
      <p>Add an address and manage your saved places.</p>

      <Section>
        <Form onSubmit={onAddAddress}>
          <Input name="name" placeholder="Place name" required />
          <Input
            name="searchWord"
            placeholder="Search keyword (city, street, landmark...)"
            required
          />
          <Input name="description" placeholder="Optional note" />
          <Button type="submit" disabled={saving}>
            {saving ? "Adding..." : "Add Address"}
          </Button>
        </Form>
      </Section>

      <Section>
        {loading ? <p>Loading addresses...</p> : null}
        {!loading && items.length === 0 ? (
          <p>No addresses yet.</p>
        ) : null}
        {!loading &&
          items.map((item) => (
            <Card key={item.id}>
              <h3>{item.name}</h3>
              {item.description ? <p>{item.description}</p> : null}
              <Small>
                lat: {item.lat.toFixed(5)} | lng: {item.lng.toFixed(5)}
              </Small>
            </Card>
          ))}
      </Section>

      <Row>
        <Button onClick={onSignout}>Sign Out</Button>
      </Row>
    </Layout>
  );
}
