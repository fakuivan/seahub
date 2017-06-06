(function(e){var t=e.django||(e.django={});t.pluralidx=function(e){var t=0;return typeof t=="boolean"?t?1:0:t},t.catalog={"Are you sure you want to delete these selected items?":"Bạn có chắc bạn muốn xóa những item đã chọn",Cancel:"Hủy","Canceled.":"Hủy bỏ","Copying %(name)s":"Đang sao chép %(name)s","Copying file %(index)s of %(total)s":"Copying file %(index)s of %(total)s",Delete:"Xóa","Delete Items":"Xóa item","Deleted directories":"Xóa thư mục","Deleted files":"Xóa tập tin","Empty file upload result":"Kết quả tải lên tập tin rỗng",Error:"Lỗi","Failed to get upload url":"Tạo đường dẫn tải lên thất bại","Failed to send to {placeholder}":"Gởi thất bại đến {placeholder}","Failed.":"Thất bại.","Failed. Please check the network.":"Thất bại. Vui lòng kiểm tra lại network.","File Upload canceled":"Hủy tải dữ liệu","File Upload complete":"Tải lên thành công","File Upload failed":"Tải lên thất bại","File Uploading...":"Đang tải dữ liệu","File is locked":"Dữ liệu bị khóa","File is too big":"Tập tin quá lớn","File is too small":"Tập tin quá nhỏ","Filetype not allowed":"Định dạng tập tin không được cho phép",Hide:"Ẩn","Internal error. Failed to copy %(name)s.":"Lỗi nội bộ. Sao chép %(name)s thất bại","Internal error. Failed to move %(name)s.":"Lỗi nội bộ. Chuyển %(name)s thất bại","Invalid destination path":"Đường dẫn không hợp lệ","It is required.":"Điều này được yêu cầu","Just now":"Vừa mới","Loading failed":"Lỗi loading","Loading...":"Đang tải...","Max number of files exceeded":"Số lượng tập tin tối đa vượt quá quy định","Modified files":"Sửa đổi tập tin","Moving %(name)s":"Đang di chuyển %(name)s","Moving file %(index)s of %(total)s":"Moving file %(index)s of %(total)s","Name is required":"Yêu cầu tên","New directories":"Thư mục mới","New files":"Tập tin mới","No matches":"Không tìm thấy","Only an extension there, please input a name.":"Chỉ có một phần mở rộng này, vui lòng nhập tên","Open in New Tab":"Mở ở Tab mới","Password is required.":"Yêu cầu mật khẩu.","Password is too short":"Mật khẩu quá ngắn","Passwords don't match":"Mật khẩu không trùng khớp","Please check the network.":"Vui lòng kiểm tra lại network.","Please enter 1 or more character":"Vui lòng thêm ký tự","Please enter password":"Vui lòng nhập mật khẩu","Please enter the password again":"Vui lòng nhập lại mật khẩu","Please enter valid days":"Vui lòng nhập số đúng","Please input at least an email.":"Vui lòng chọn ít nhất một địa chỉ email","Processing...":"Đang xử lý...","Renamed or Moved files":"Đổi tên hoặc chuyển tập tin","Saving...":"Đang lưu...","Searching...":"Đang tìm...",Start:"Bắt đầu",Success:"Thành công","Successfully copied %(name)s and %(amount)s other items.":"Sao chép %(name)s và %(amount)s item khác thành công.","Successfully copied %(name)s and 1 other item.":"Sao chép %(name)s và 1 item khác thành công.","Successfully copied %(name)s.":"Sao chép %(name)s thành công.","Successfully deleted %(name)s":"Xóa %(name)s thành công","Successfully deleted %(name)s and %(amount)s other items.":"Xóa %(name)s và %(amount)s item khác thành công","Successfully deleted %(name)s.":"Xóa %(name)s thành công","Successfully moved %(name)s and %(amount)s other items.":"Di chuyển %(name)s và %(amount)s item khác thành công.","Successfully moved %(name)s and 1 other item.":"Di chuyển %(name)s và 1 item khác thành công.","Successfully moved %(name)s.":"Di chuyển %(name)s thành công.","Successfully sent to {placeholder}":"Gởi thành công đến {placeholder}","Uploaded bytes exceed file size":"Đã tải lên những byte vượt quá kích thước của file",canceled:"đã hủy bỏ",uploaded:"đã tải lên"},t.gettext=function(e){var n=t.catalog[e];return typeof n=="undefined"?e:typeof n=="string"?n:n[0]},t.ngettext=function(e,n,r){var i=t.catalog[e];return typeof i=="undefined"?r==1?e:n:i[t.pluralidx(r)]},t.gettext_noop=function(e){return e},t.pgettext=function(e,n){var r=t.gettext(e+""+n);return r.indexOf("")!=-1&&(r=n),r},t.npgettext=function(e,n,r,i){var s=t.ngettext(e+""+n,e+""+r,i);return s.indexOf("")!=-1&&(s=t.ngettext(n,r,i)),s},t.interpolate=function(e,t,n){return n?e.replace(/%\(\w+\)s/g,function(e){return String(t[e.slice(2,-2)])}):e.replace(/%s/g,function(e){return String(t.shift())})},t.formats={DATETIME_FORMAT:"H:i \\N\\gà\\y d \\t\\há\\n\\g n \\nă\\m Y",DATETIME_INPUT_FORMATS:["%Y-%m-%d %H:%M:%S","%Y-%m-%d %H:%M:%S.%f","%Y-%m-%d %H:%M","%Y-%m-%d","%m/%d/%Y %H:%M:%S","%m/%d/%Y %H:%M:%S.%f","%m/%d/%Y %H:%M","%m/%d/%Y","%m/%d/%y %H:%M:%S","%m/%d/%y %H:%M:%S.%f","%m/%d/%y %H:%M","%m/%d/%y"],DATE_FORMAT:"\\N\\gà\\y d \\t\\há\\n\\g n \\nă\\m Y",DATE_INPUT_FORMATS:["%Y-%m-%d","%m/%d/%Y","%m/%d/%y","%b %d %Y","%b %d, %Y","%d %b %Y","%d %b, %Y","%B %d %Y","%B %d, %Y","%d %B %Y","%d %B, %Y"],DECIMAL_SEPARATOR:",",FIRST_DAY_OF_WEEK:"0",MONTH_DAY_FORMAT:"j F",NUMBER_GROUPING:"0",SHORT_DATETIME_FORMAT:"H:i d-m-Y",SHORT_DATE_FORMAT:"d-m-Y",THOUSAND_SEPARATOR:".",TIME_FORMAT:"H:i",TIME_INPUT_FORMATS:["%H:%M:%S","%H:%M:%S.%f","%H:%M"],YEAR_MONTH_FORMAT:"F Y"},t.get_format=function(e){var n=t.formats[e];return typeof n=="undefined"?e:n},e.pluralidx=t.pluralidx,e.gettext=t.gettext,e.ngettext=t.ngettext,e.gettext_noop=t.gettext_noop,e.pgettext=t.pgettext,e.npgettext=t.npgettext,e.interpolate=t.interpolate,e.get_format=t.get_format})(this);