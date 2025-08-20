import { PageHeader } from "@/components/sections/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMessages } from "@/lib/actions";

export default async function MessagesDashboardPage() {
  const messages = await getMessages();

  return (
    <>
      <PageHeader
        title="Contact Messages"
        subtitle="Dashboard"
        description="Here are the messages submitted through the contact form."
      />
      <section className="container mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
            <CardDescription>
              {messages.length > 0
                ? `You have ${messages.length} message(s).`
                : "Your inbox is empty."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {messages.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((msg, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{msg.name}</TableCell>
                      <TableCell>{msg.email}</TableCell>
                      <TableCell>{msg.phone}</TableCell>
                      <TableCell>{msg.message}</TableCell>
                      <TableCell>{msg.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                No messages yet.
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </>
  );
}
