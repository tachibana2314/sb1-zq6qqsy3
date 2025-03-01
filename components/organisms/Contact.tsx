"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ContactForm, ContactType } from "@/types";

const contactTypes: ContactType[] = [
  "店舗・オフィスの設計について",
  "その他"
];

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  company: z.string().min(1, "会社名を入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号を入力してください"),
  type: z.enum([
    "店舗・オフィスの設計について",
    "その他"
  ] as const),
  message: z.string().min(1, "お問い合わせ内容を入力してください"),
});

export const Contact = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-16">CONTACT</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                お名前 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                {...form.register("name")}
                className="w-full"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium">
                会社名 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                {...form.register("company")}
                className="w-full"
              />
              {form.formState.errors.company && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.company.message}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                メールアドレス <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="w-full"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                電話番号 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                className="w-full"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </Label>
              <Select
                onValueChange={(value) => form.setValue("type", value as ContactType)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {contactTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.type && (
                <p className="text-red-500 text-sm">
                  お問い合わせ種別を選択してください
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                {...form.register("message")}
                className="w-full h-32"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};