import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  };
}

export default async function AdminDashboard() {
  const { amount, numberOfSales } = await getSalesData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <DashboardCard title="Sales" description="Action Figure" text="Yes" />
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  description: string;
  text: string;
};

function DashboardCard({ title, description, text }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>{text}</CardContent>
    </Card>
  );
}
