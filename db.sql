--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: AbsenType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."AbsenType" AS ENUM (
    'Masuk',
    'Keluar'
);


ALTER TYPE public."AbsenType" OWNER TO postgres;

--
-- Name: JadwalStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."JadwalStatus" AS ENUM (
    'Draft',
    'Published'
);


ALTER TYPE public."JadwalStatus" OWNER TO postgres;

--
-- Name: WorkStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."WorkStatus" AS ENUM (
    'WorkFromHome',
    'WorkFromOffice',
    'DinasLuar'
);


ALTER TYPE public."WorkStatus" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Absen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Absen" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "pegawaiId" integer NOT NULL,
    "workStatus" public."WorkStatus" NOT NULL,
    waktu timestamp(3) without time zone,
    "jadwalId" integer NOT NULL
);


ALTER TABLE public."Absen" OWNER TO postgres;

--
-- Name: Absen_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Absen_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Absen_id_seq" OWNER TO postgres;

--
-- Name: Absen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Absen_id_seq" OWNED BY public."Absen".id;


--
-- Name: Jadwal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Jadwal" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "createdById" integer NOT NULL,
    "unitKerjaId" integer NOT NULL,
    hari date NOT NULL,
    waktu time without time zone NOT NULL,
    status public."JadwalStatus" DEFAULT 'Draft'::public."JadwalStatus" NOT NULL,
    type public."AbsenType" NOT NULL
);


ALTER TABLE public."Jadwal" OWNER TO postgres;

--
-- Name: Jadwal_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Jadwal_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Jadwal_id_seq" OWNER TO postgres;

--
-- Name: Jadwal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Jadwal_id_seq" OWNED BY public."Jadwal".id;


--
-- Name: Login; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Login" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "expiredAt" timestamp(3) without time zone NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Login" OWNER TO postgres;

--
-- Name: Login_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Login_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Login_id_seq" OWNER TO postgres;

--
-- Name: Login_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Login_id_seq" OWNED BY public."Login".id;


--
-- Name: Pegawai; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Pegawai" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    nama text NOT NULL,
    nip text,
    nik text NOT NULL,
    avatar text,
    "userId" integer NOT NULL
);


ALTER TABLE public."Pegawai" OWNER TO postgres;

--
-- Name: Pegawai_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Pegawai_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pegawai_id_seq" OWNER TO postgres;

--
-- Name: Pegawai_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Pegawai_id_seq" OWNED BY public."Pegawai".id;


--
-- Name: UnitKerja; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UnitKerja" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    nama text NOT NULL,
    alamat text NOT NULL,
    avatar text,
    latitude text,
    longitude text
);


ALTER TABLE public."UnitKerja" OWNER TO postgres;

--
-- Name: UnitKerja_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."UnitKerja_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."UnitKerja_id_seq" OWNER TO postgres;

--
-- Name: UnitKerja_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."UnitKerja_id_seq" OWNED BY public."UnitKerja".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    "superUser" boolean NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _UnitKerjaToUser; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_UnitKerjaToUser" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_UnitKerjaToUser" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Absen id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Absen" ALTER COLUMN id SET DEFAULT nextval('public."Absen_id_seq"'::regclass);


--
-- Name: Jadwal id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Jadwal" ALTER COLUMN id SET DEFAULT nextval('public."Jadwal_id_seq"'::regclass);


--
-- Name: Login id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Login" ALTER COLUMN id SET DEFAULT nextval('public."Login_id_seq"'::regclass);


--
-- Name: Pegawai id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pegawai" ALTER COLUMN id SET DEFAULT nextval('public."Pegawai_id_seq"'::regclass);


--
-- Name: UnitKerja id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UnitKerja" ALTER COLUMN id SET DEFAULT nextval('public."UnitKerja_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Absen; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Absen" (id, "createdAt", "updatedAt", "pegawaiId", "workStatus", waktu, "jadwalId") FROM stdin;
3	2022-05-08 17:19:55.531	2022-05-08 17:19:55.532	1	WorkFromHome	\N	1
4	2022-05-10 18:24:01.509	2022-05-10 18:24:01.51	3	WorkFromOffice	\N	1
5	2022-05-10 18:24:56.107	2022-05-10 18:24:56.108	2	WorkFromOffice	\N	1
2	2022-05-07 18:11:04.041	2022-05-11 16:34:36.346	4	WorkFromOffice	2022-05-11 16:34:36.255	1
\.


--
-- Data for Name: Jadwal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Jadwal" (id, "createdAt", "updatedAt", "createdById", "unitKerjaId", hari, waktu, status, type) FROM stdin;
2	2022-05-05 11:49:00.696	2022-05-05 11:49:00.697	1	1	2022-05-13	02:50:00	Draft	Masuk
3	2022-05-08 16:45:48.771	2022-05-08 16:45:48.772	1	2	2022-05-04	02:10:00	Draft	Masuk
1	2022-04-30 18:16:20.867	2022-05-11 11:26:02.497	1	2	2022-05-11	12:00:00	Published	Masuk
\.


--
-- Data for Name: Login; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Login" (id, "createdAt", "expiredAt", token, "userId") FROM stdin;
1	2022-04-28 08:54:15.72	2022-04-29 08:54:15.712	e58d05b35b51	1
2	2022-04-28 08:55:36.358	2022-04-29 08:55:36.352	fc361a069520	1
3	2022-04-28 08:55:59.271	2022-04-29 08:55:59.268	8c2660340f98	1
4	2022-04-29 06:48:35.95	2022-04-30 06:48:35.94	f62836d59b78	1
5	2022-04-29 11:39:32.827	2022-04-30 11:39:32.821	a91438a9f79e	1
6	2022-04-30 13:38:41.334	2022-05-01 13:38:41.326	eb3f4fbecf63	1
7	2022-04-30 15:37:53.054	2022-05-01 15:37:53.046	6492caf4e1b8	1
8	2022-05-05 11:48:00.32	2022-05-06 11:48:00.312	cf03d96dd753	1
9	2022-05-05 11:57:30.438	2022-05-06 11:57:30.43	c2ea8d473a76	1
10	2022-05-05 17:01:26.869	2022-05-06 17:01:26.862	c3ac3ed3a67e	1
11	2022-05-06 17:41:52.943	2022-05-07 17:41:52.936	6d6c55ff4b13	1
12	2022-05-07 05:40:45.262	2022-05-08 05:40:45.254	1cff064b876a	1
13	2022-05-07 07:50:41.346	2022-05-08 07:50:41.341	1fc7a88f7e1a	1
14	2022-05-07 17:47:12.481	2022-05-08 17:47:12.474	892c4f775a3f	1
15	2022-05-07 17:59:23.792	2022-05-08 17:59:23.787	f6c8ac6a2995	1
16	2022-05-08 16:32:13.444	2022-05-09 16:32:13.436	114a8704a782	1
17	2022-05-08 16:42:36.041	2022-05-09 16:42:36.032	837629b252b0	1
18	2022-05-08 16:54:17.42	2022-05-09 16:54:17.414	783d96d94a25	1
19	2022-05-08 18:02:56.689	2022-05-09 18:02:56.678	5e8de9b7364d	1
20	2022-05-08 21:55:27.001	2022-05-09 21:55:26.994	4b12d2d11062	1
21	2022-05-09 10:17:02.583	2022-05-10 10:17:02.575	6dfbc6a6d6fe	1
22	2022-05-09 18:09:38.782	2022-05-10 18:09:38.775	e7d28ae5072c	1
23	2022-05-09 20:00:28.979	2022-05-10 20:00:28.97	8175b550ee38	1
24	2022-05-10 10:25:25.051	2022-05-11 10:25:25.044	5f42a2599fe4	1
25	2022-05-10 10:59:13.642	2022-05-11 10:59:13.635	e19b91e39ff7	1
26	2022-05-10 18:06:07.634	2022-05-11 18:06:07.625	3aebe246aaf9	1
27	2022-05-10 18:15:55.397	2022-05-11 18:15:55.392	1546e6841368	1
28	2022-05-10 20:15:12.87	2022-05-11 20:15:12.862	e4af81b0642b	1
29	2022-05-10 21:18:21.123	2022-05-11 21:18:21.118	5e2d44a314f7	1
30	2022-05-10 21:18:37.974	2022-05-11 21:18:37.971	b87b8489b84b	5
31	2022-05-10 21:21:16.437	2022-05-11 21:21:16.433	3d287097d831	1
32	2022-05-10 21:21:59.009	2022-05-11 21:21:59.006	25644f366242	9
33	2022-05-10 21:29:41.564	2022-05-11 21:29:41.559	78742b241dc2	1
34	2022-05-10 21:36:57.797	2022-05-11 21:36:57.794	c57e8473510f	5
35	2022-05-11 08:49:22.242	2022-05-12 08:49:22.232	64b7e51a2ea5	1
36	2022-05-11 10:12:42.644	2022-05-12 10:12:42.635	dce67fc5a455	5
37	2022-05-11 10:13:08.564	2022-05-12 10:13:08.56	259e081d9b4b	5
38	2022-05-11 10:30:44.089	2022-05-12 10:30:44.083	20b8f086bfcd	1
39	2022-05-11 16:13:39.874	2022-05-12 16:13:39.868	8d9487924a94	5
40	2022-05-11 16:28:08.586	2022-05-12 16:28:08.579	d0c4e0113257	1
41	2022-05-11 16:29:46.531	2022-05-12 16:29:46.526	7d5893bbf6c8	5
42	2022-05-11 16:35:20.437	2022-05-12 16:35:20.431	f909c87c1db1	1
43	2022-05-12 09:32:31.895	2022-05-13 09:32:31.886	dd90e9d0bac1	1
\.


--
-- Data for Name: Pegawai; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Pegawai" (id, "createdAt", "updatedAt", nama, nip, nik, avatar, "userId") FROM stdin;
3	2022-04-30 15:41:03.994	2022-04-30 15:41:03.995	Ariel	984545	849384	\N	4
4	2022-04-30 16:09:34.287	2022-04-30 16:09:34.288	Egi Mampur	3993849384	2389283	\N	5
1	2022-04-28 11:45:58.121	2022-05-05 17:14:12.791	Yulius Arnoldus Bili Jr	8928392839823	123456	\N	2
2	2022-04-30 15:38:19.573	2022-05-05 17:29:09.33	Samuel Laning	982989283	2839283982	\N	3
5	2022-05-10 21:21:34.334	2022-05-10 21:21:34.335	dedi nubatonis	398398434	2389223	\N	9
\.


--
-- Data for Name: UnitKerja; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UnitKerja" (id, "createdAt", "updatedAt", nama, alamat, avatar, latitude, longitude) FROM stdin;
2	2022-04-28 11:44:27.839	2022-05-10 15:03:14.372	Kantor Pusat	sdksjd	https://ik.imagekit.io/neuraldown/will-smith_WbOIBeFzK.jpeg		
1	2022-04-28 09:06:03.366	2022-05-10 15:05:41.423	Kantor Cabang Tarus	Jl. Hayam Wuruk, 21 Kupang NTT	https://ik.imagekit.io/neuraldown/sirah-logo_ikhPp0Dlb.png		
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, "createdAt", "updatedAt", username, password, "superUser") FROM stdin;
1	2022-04-28 08:53:47.345	2022-04-28 08:53:47.347	adminzero	adminzero	t
2	2022-04-28 11:45:58.121	2022-04-28 11:45:58.122	yulius	yulius	f
3	2022-04-30 15:38:19.573	2022-04-30 15:38:19.573	samuelaning	samuelaning	f
4	2022-04-30 15:41:03.994	2022-04-30 15:41:03.995	ariel2	ariel2	f
5	2022-04-30 16:09:34.287	2022-04-30 16:09:34.288	egimampur	egimampur	f
6	2022-05-08 16:41:19.933	2022-05-08 16:41:19.933	adminzero	adminzero	t
7	2022-05-08 16:41:29.447	2022-05-08 16:41:29.448	adminzero	adminzero	t
8	2022-05-08 16:41:34.407	2022-05-08 16:41:34.408	adminzero	adminzero	t
9	2022-05-10 21:21:34.334	2022-05-10 21:21:34.335	dedinubatonis	dedinubatonis	f
\.


--
-- Data for Name: _UnitKerjaToUser; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_UnitKerjaToUser" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
c680bdb7-87cf-4550-89c2-1ee6502160b8	f1d3be48d22c6f5106af95dfa081627f79f4c7d915441dec418e1086863599a1	2022-04-28 05:53:56.823033+08	20220413132846_init	\N	\N	2022-04-28 05:53:56.719995+08	1
818e5e24-5b18-4fee-83cf-bad9956727ff	0751a58f6ddb690aa688ab5353041e88e9eafe7aab969c081c6b2f7c7b0ca8bc	2022-04-28 05:53:56.838587+08	20220417145132_add_optional_dl_fields	\N	\N	2022-04-28 05:53:56.825687+08	1
1224b684-1020-4560-bc08-f25d0f0b93e9	152e25f7e5c4c06565fddc5da6a845d0c0f90d638279c7fd37e952b247db6267	2022-04-28 05:53:56.856707+08	20220417150058_optional_unit_kerja_in_jadwal	\N	\N	2022-04-28 05:53:56.841224+08	1
5c690ab0-54d0-4cbd-a75e-83a6f83027a6	b08861e59ecb9c81e460fb8bb2ed9f07973a3d59fa4b8bbd9de1bdf2d3e4434f	2022-04-28 05:53:56.872803+08	20220417151602_change_date_time_fields	\N	\N	2022-04-28 05:53:56.859985+08	1
1484de7e-41f4-432e-b789-3ae178887ec8	6bf6850f136a6c3f24ce982fee1046f3052454c849e454fdc0db8fbbddb29f3f	2022-04-28 05:53:56.886673+08	20220417152410_change_date_time_fields	\N	\N	2022-04-28 05:53:56.875349+08	1
966fa32b-6238-43ef-bab1-e37f8d7ec3e3	670d450cfda9dd87cffe87ea2e7bb77825486268f9c56cf43654295975c511e7	2022-04-28 05:53:58.988114+08	20220427215358_rewrite	\N	\N	2022-04-28 05:53:58.944001+08	1
d7dc8ecf-561c-4ca7-82a4-426dff6d491e	08d035d036661400916fde4d56de4f2e7c1f10f575e62f3f68be12d57a302dba	2022-05-01 01:49:10.751883+08	20220430174910_move_type_to_absen	\N	\N	2022-05-01 01:49:10.732781+08	1
6e51a500-b898-401d-a576-52972e50b316	2dcac3c04abc3656ea070ed888cef150cd7b9e6e958a30cc494047e9f8f04f4c	2022-05-01 02:32:39.794023+08	20220430183239_add_jadwal_status	\N	\N	2022-05-01 02:32:39.781621+08	1
c2d8f3af-83d0-4f6f-b090-fe9fdf38ee63	26587b94456f9af9e22d6d88e73b428a34f294d87fab8a5ac415b9e38d125b9b	2022-05-05 21:23:16.922655+08	20220505132316_link_absen_jadwal	\N	\N	2022-05-05 21:23:16.902671+08	1
2377847a-0ff8-4d9e-bc92-0f753f705158	76a620b0fc38821b1a28aca8adf441abd480820216dfb981f89a7cfd967cf559	2022-05-09 00:40:13.408622+08	20220508163926_move_absen_type	\N	\N	2022-05-09 00:40:13.392773+08	1
f17ce6e2-f11b-4a31-898e-48da8b831cf0	be04a3b55f7b3b668f53d6139bbd76fbbf09b7ec18728f3854d73bbe83718c95	2022-05-09 00:40:28.051693+08	20220508164027_absen_to_jadwal	\N	\N	2022-05-09 00:40:28.042742+08	1
\.


--
-- Name: Absen_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Absen_id_seq"', 5, true);


--
-- Name: Jadwal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Jadwal_id_seq"', 3, true);


--
-- Name: Login_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Login_id_seq"', 43, true);


--
-- Name: Pegawai_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pegawai_id_seq"', 5, true);


--
-- Name: UnitKerja_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."UnitKerja_id_seq"', 2, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 9, true);


--
-- Name: Absen Absen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Absen"
    ADD CONSTRAINT "Absen_pkey" PRIMARY KEY (id);


--
-- Name: Jadwal Jadwal_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Jadwal"
    ADD CONSTRAINT "Jadwal_pkey" PRIMARY KEY (id);


--
-- Name: Login Login_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Login"
    ADD CONSTRAINT "Login_pkey" PRIMARY KEY (id);


--
-- Name: Pegawai Pegawai_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pegawai"
    ADD CONSTRAINT "Pegawai_pkey" PRIMARY KEY (id);


--
-- Name: UnitKerja UnitKerja_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UnitKerja"
    ADD CONSTRAINT "UnitKerja_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Pegawai_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Pegawai_userId_key" ON public."Pegawai" USING btree ("userId");


--
-- Name: _UnitKerjaToUser_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_UnitKerjaToUser_AB_unique" ON public."_UnitKerjaToUser" USING btree ("A", "B");


--
-- Name: _UnitKerjaToUser_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_UnitKerjaToUser_B_index" ON public."_UnitKerjaToUser" USING btree ("B");


--
-- Name: Absen Absen_jadwalId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Absen"
    ADD CONSTRAINT "Absen_jadwalId_fkey" FOREIGN KEY ("jadwalId") REFERENCES public."Jadwal"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Absen Absen_pegawaiId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Absen"
    ADD CONSTRAINT "Absen_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES public."Pegawai"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Jadwal Jadwal_createdById_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Jadwal"
    ADD CONSTRAINT "Jadwal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Jadwal Jadwal_unitKerjaId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Jadwal"
    ADD CONSTRAINT "Jadwal_unitKerjaId_fkey" FOREIGN KEY ("unitKerjaId") REFERENCES public."UnitKerja"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Login Login_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Login"
    ADD CONSTRAINT "Login_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Pegawai Pegawai_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Pegawai"
    ADD CONSTRAINT "Pegawai_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: _UnitKerjaToUser _UnitKerjaToUser_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_UnitKerjaToUser"
    ADD CONSTRAINT "_UnitKerjaToUser_A_fkey" FOREIGN KEY ("A") REFERENCES public."UnitKerja"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _UnitKerjaToUser _UnitKerjaToUser_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_UnitKerjaToUser"
    ADD CONSTRAINT "_UnitKerjaToUser_B_fkey" FOREIGN KEY ("B") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

