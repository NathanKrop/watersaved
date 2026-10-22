create table if not exists public.volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  county text not null,
  availability text,
  skills text,
  motivation text not null,
  newsletter_opt_in_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.partner_applications (
  id uuid primary key default gen_random_uuid(),
  org_name text not null,
  contact_name text not null,
  email text not null,
  partnership_type text not null,
  message text not null,
  newsletter_opt_in_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.volunteer_applications enable row level security;
alter table public.partner_applications enable row level security;

revoke all on table public.volunteer_applications from anon, authenticated;
revoke all on table public.partner_applications from anon, authenticated;
grant insert on table public.volunteer_applications to service_role;
grant insert on table public.partner_applications to service_role;
