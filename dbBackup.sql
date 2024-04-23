PGDMP      2                |        	   workingDB    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24576 	   workingDB    DATABASE        CREATE DATABASE "workingDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Canada.1252';
    DROP DATABASE "workingDB";
                postgres    false            �            1259    24578    activity    TABLE       CREATE TABLE public.activity (
    id integer NOT NULL,
    activity character varying(255),
    type character varying(255),
    participants integer,
    link character varying(255),
    key character varying(255),
    accessibility double precision,
    price double precision
);
    DROP TABLE public.activity;
       public         heap    postgres    false            �            1259    24577    activity_id_seq    SEQUENCE     �   ALTER TABLE public.activity ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.activity_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    24594    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(255),
    accessibility character varying(255),
    price character varying(255)
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    24593    user_id_seq    SEQUENCE     �   ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �          0    24578    activity 
   TABLE DATA           e   COPY public.activity (id, activity, type, participants, link, key, accessibility, price) FROM stdin;
    public          postgres    false    216   �       �          0    24594    user 
   TABLE DATA           @   COPY public."user" (id, name, accessibility, price) FROM stdin;
    public          postgres    false    218   �       �           0    0    activity_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.activity_id_seq', 8, true);
          public          postgres    false    215            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public          postgres    false    217                        2606    24584    activity activity_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.activity
    ADD CONSTRAINT activity_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.activity DROP CONSTRAINT activity_pkey;
       public            postgres    false    216            "           2606    24600    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    218            �     x�]��r� E��+����q�̤H�2�
I6����A�d�44p�����G��͞��t�7����5�b��8��L��U����wm���8Z��d|�%�5�u��<@�=|��cK:ɛa���B�-J�ɢ���O����,s̥X:����AU�H�y�L�4���0v  j�� � '��򸙚�Y�`�#
 xqc��mn����{�6�ꜞ��s�m����9U�_w �{�ز�ٔ�"��"^�Œ:�	�UZs�|�2��WE��L�^      �   '   x�3�,�������/���L��2�,N,J�!1z\\\ �
�     