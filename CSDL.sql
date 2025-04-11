/*
Created		6/20/2022
Modified		6/20/2022
Project		
Model			
Company		
Author		
Version		
Database		MS SQL 2005 
*/


Create database AMNHAC
go

Use AMNHAC

Create table [NGUOIDUNG]
(
	[manguoidung] Char(10) NOT NULL,
	[tentaikhoan] Char(10) NOT NULL,
	[ngaysinh] Datetime NULL,
	[gmail] Char(20) NOT NULL,
	[anh] Char(100) NOT NULL,
	[manguoidungvip] Char(10) NULL,
Primary Key ([manguoidung])
) 
go

Create table [SANPHAM]
(
	[masanpham] Char(10) NOT NULL,
	[tensanpham] Char(50) NOT NULL,
	[tacgia] Char(20) NOT NULL,
	[anhminhhoa] Char(100) NOT NULL,
	[filesanpham] Char(100) NOT NULL,
	[matheloai] Char(10) NOT NULL,
	[masanphammoi] Char(10) NOT NULL,
Primary Key ([masanpham])
) 
go

Create table [THELOAI]
(
	[matheloai] Char(10) NOT NULL,
	[tentheloai] Char(20) NOT NULL,
	[mota] Char(200) NOT NULL,
Primary Key ([matheloai])
) 
go

Create table [NGUOIDUNGVIP]
(
	[manguoidungvip] Char(10) NOT NULL,
	[ngaythem] Datetime NOT NULL,
Primary Key ([manguoidungvip])
) 
go

Create table [SANPHAMMOI]
(
	[masanphammoi] Char(10) NOT NULL,
	[ngaythem] Datetime NOT NULL,
Primary Key ([masanphammoi])
) 
go

Create table [THUVIEN]
(
	[manguoidung] Char(10) NOT NULL,
	[masanpham] Char(10) NOT NULL,
Primary Key ([manguoidung],[masanpham])
) 
go


Alter table [THUVIEN] add  foreign key([manguoidung]) references [NGUOIDUNG] ([manguoidung])  on update no action on delete no action 
go
Alter table [THUVIEN] add  foreign key([masanpham]) references [SANPHAM] ([masanpham])  on update no action on delete no action 
go
Alter table [SANPHAM] add  foreign key([matheloai]) references [THELOAI] ([matheloai])  on update no action on delete no action 
go
Alter table [NGUOIDUNG] add  foreign key([manguoidungvip]) references [NGUOIDUNGVIP] ([manguoidungvip])  on update no action on delete no action 
go
Alter table [SANPHAM] add  foreign key([masanphammoi]) references [SANPHAMMOI] ([masanphammoi])  on update no action on delete no action 




