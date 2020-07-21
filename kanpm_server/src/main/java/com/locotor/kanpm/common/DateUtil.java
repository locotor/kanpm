package com.locotor.kanpm.common;

// import org.apache.commons.lang3.StringUtils;

import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author 叶舟
 * 时间转换工具类
 * @date 2018/5/21 15:32
 */
public class DateUtil {

    private final static Pattern pattern = Pattern.compile("[0-9]*");

    private final static String DATE_PATTERN_CN = "yyyy-MM-dd HH:mm:ss";

    private final static String DATE_PATTERN_ZH_CN = "yyyy年MM月dd日 HH时mm分ss秒";

    private final static String DATE_PATTERN_ZH_CN_SHORT = "yyyy年MM月dd日";

    private final static String DATE_PATTERN_CN_SHORT = "yyyy-MM-dd";

    private final static String DATE_PATTERN_CN_TIME = "HH:mm:ss";


    public static String dateFormat(final String date) {
        final SimpleDateFormat sdf1 = new SimpleDateFormat(
                "EEE MMM dd HH:mm:ss Z yyyy", Locale.UK);
        try {
            final Date d = sdf1.parse(date);
            final SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            return simpleDateFormat.format(d);
        } catch (final ParseException e) {
            e.printStackTrace();
            return date;
        }
    }

    /**
     * @return java.lang.String
     * 日期格式转换
     * @author zhangDh
     * @date 2018/6/1 10:29
     */
    public static String dateFormat(final String date, final String oldFormat, final String newFormat) {
        return toDateStr(toDate(date, oldFormat), newFormat);
    }

    /**
     * @return java.lang.String
     * 时间戳字符串转为日期格式字符串
     * @author zhangDh
     * @date 2018/6/1 10:29
     */
    public static String dateFormat(final String seconds, String format) {
        if (seconds == null || seconds.isEmpty() || seconds.equals("null")) {
            return "";
        }
        if (format == null || format.isEmpty()) {
            format = "yyyy-MM-dd HH:mm:ss";
        }
        final SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(new Date(Long.valueOf(seconds + "000")));
    }

    /**
     * @return 返回日期时间字符串(yyyy - MM - dd HH : mm : ss)
     * 获取当前日期时间字符串
     * @author zhangDh
     * @date 2018/6/1 10:30
     */
    public static String getDateStr() {
        return getDateStr(DATE_PATTERN_CN);
    }

    /**
     * @return 返回日期字符串(yyyy - MM - dd)
     * 获取当前日期字符串
     * @author zhangDh
     * @date 2018/6/1 10:30
     */
    public static String getShortDateStr() {
        return getDateStr(DATE_PATTERN_CN_SHORT);
    }

    /**
     * @return 返回时间字符串(HH : mm : ss)
     * 获取当前时间字符串
     * @author zhangDh
     * @date 2018/6/1 10:31
     */
    public static String getTimeStr() {
        return getDateStr(DATE_PATTERN_CN_TIME);
    }

    /**
     * @return 日期格式字符串，例如：yyyy-MM-dd HH:mm:ss
     * 当前时间转指定格式的日期字符串
     * @author zhangDh
     * @date 2018/6/1 10:31
     */
    public static String getDateStr(final String format) {
        final SimpleDateFormat formatter = new SimpleDateFormat(format);
        return formatter.format(new Date());
    }

    /**
     * @return java.lang.String
     * 转换为日期时间字符串(yyyy-MM-dd HH:mm:ss)
     * @author zhangDh
     * @date 2018/6/1 10:37
     */
    public static String toDateStr(final Date date) {
        final SimpleDateFormat formatter = new SimpleDateFormat(DATE_PATTERN_CN);
        final String dateString = formatter.format(date);
        return dateString;
    }

    /**
     * @return java.lang.String
     * 日期转字符串（yyyy-MM-dd格式）
     * @author zhangDh
     * @date 2018/5/21 15:34
     */
    public static String toShortDateStr(final Date date) {
        final SimpleDateFormat formatter = new SimpleDateFormat(DATE_PATTERN_CN_SHORT);
        final String dateString = formatter.format(date);
        return dateString;
    }

    /**
     * @return java.lang.String
     * 转换为日期字符串(yyyy年MM月dd日 HH时mm分ss秒)
     * @author zhangDh
     * @date 2018/6/1 10:38
     */
    public static String toCnDateStr(final Date date) {
        final SimpleDateFormat formatter = new SimpleDateFormat(DATE_PATTERN_ZH_CN);
        final String dateString = formatter.format(date);
        return dateString;
    }

    /**
     * @return java.lang.String
     * 转换为日期字符串(yyyy年MM月dd日)
     * @author zhangDh
     * @date 2018/6/1 10:52
     */
    public static String toCnShortDateStr(final Date date) {
        final SimpleDateFormat formatter = new SimpleDateFormat(DATE_PATTERN_ZH_CN_SHORT);
        final String dateString = formatter.format(date);
        return dateString;
    }

    /***
     * @return java.lang.String
     *  日期转换为自定义格式日期时间字符串
     * @author zhangDh
     * @date 2018/6/1 10:52
     */
    public static String toDateStr(final Date date, final String format) {
        final SimpleDateFormat formatter = new SimpleDateFormat(format);
        final String dateString = formatter.format(date);
        return dateString;
    }

    /**
     * @return java.util.Date
     * 字符串转date
     * @author zhangDh
     * @date 2018/6/1 10:55
     */
    public static Date toDate(final String date) {
        return toDate(date, formatDate(date));
    }

    /**
     * @return 将时间戳转换为date类型
     * @author wenzhe
     * @date 2017/11/3 14:40
     */
    public static Date stringConvertDate(final Object date) {
        // FIXME 添加 String 工具类
        // if (date == null || StringUtils.isBlank(date.toString())) {
        //     return null;
        // }
        //是否为数字
        final Matcher isNum = pattern.matcher(date.toString());
        if (!isNum.matches()) {
            return null;
        }
        return new Date(Long.valueOf(date.toString()));
    }

    public static String formatDate(final String dateStr) {
        final HashMap<String, String> dateRegFormat = new HashMap<String, String>();
        // 如：2014年3月12日 13时5分34秒，2014-03-12 12:05:34，2014/3/12 12:5:34
        dateRegFormat.put(
                "^\\d{4}\\D+\\d{1,2}\\D+\\d{1,2}\\D+\\d{1,2}\\D+\\d{1,2}\\D+\\d{1,2}\\D*$",
                "yyyy-MM-dd HH:mm:ss");
        // 如：2014-03-12 12:05
        dateRegFormat.put("^\\d{4}\\D+\\d{2}\\D+\\d{2}\\D+\\d{2}\\D+\\d{2}$",
                "yyyy-MM-dd HH:mm");
        // 如：2014-03-12 12
        dateRegFormat.put("^\\d{4}\\D+\\d{2}\\D+\\d{2}\\D+\\d{2}$",
                "yyyy-MM-dd HH");
        // 如：2014-03-12
        dateRegFormat.put("^\\d{4}\\D+\\d{2}\\D+\\d{2}$", "yyyy-MM-dd");
        // 如：2014-03
        dateRegFormat.put("^\\d{4}\\D+\\d{2}$", "yyyy-MM");
        // 如：2014
        dateRegFormat.put("^\\d{4}$", "yyyy");
        // 如：20140312120534
        dateRegFormat.put("^\\d{14}$", "yyyyMMddHHmmss");
        // 如：201403121205
        dateRegFormat.put("^\\d{12}$", "yyyyMMddHHmm");
        // 如：2014031212
        dateRegFormat.put("^\\d{10}$", "yyyyMMddHH");
        // 如：20140312
        dateRegFormat.put("^\\d{8}$", "yyyyMMdd");
        // 如：201403
        dateRegFormat.put("^\\d{6}$", "yyyyMM");
        // 如：14.10.18(年.月.日)
        dateRegFormat.put("^\\d{2}\\D+\\d{1,2}\\D+\\d{1,2}$", "yy-MM-dd");
        String format = DATE_PATTERN_CN;
        for (final Map.Entry<String, String> entry : dateRegFormat.entrySet()) {
            if (Pattern.compile(entry.getKey()).matcher(dateStr).matches()) {
                format = entry.getValue();
                break;
            }
        }
        return format;
    }

    /**
     * 转换为日期对象
     *
     * @param date 短时间格式字符串(yyyy-MM-dd)
     * @return
     */
    public static Date toShortDate(final String date) {
        return toDate(date, DATE_PATTERN_CN_SHORT);
    }

    /**
     * 转换为日期对象
     *
     * @param date
     * @param format
     * @return
     */
    public static Date toDate(final String date, final String format) {
        final SimpleDateFormat formatter = new SimpleDateFormat(format);
        final ParsePosition pos = new ParsePosition(0);
        return formatter.parse(date, pos);
    }

    /**
     * 计算指定天数间隔的日期字符串
     */
    public static String getDateStrByDays(final String nowdate, final String days) {
        try {
            final SimpleDateFormat format = new SimpleDateFormat(DATE_PATTERN_CN_SHORT);
            String mdate = "";
            final Date d = toDate(nowdate);
            final long myTime = (d.getTime() / 1000) + Integer.parseInt(days) * 24 * 60 * 60L;
            d.setTime(myTime * 1000);
            mdate = format.format(d);
            return mdate;
        } catch (final Exception e) {
            return "";
        }
    }

    /**
     * 计算指定分钟间隔的日期字符串
     *
     * @param dateStr
     * @return
     */
    public static String getDateStrByMinutes(final String dateStr, final int minutes) {
        final SimpleDateFormat format = new SimpleDateFormat(DATE_PATTERN_CN);
        try {
            final Date date = format.parse(dateStr);
            final long seconds = (date.getTime() / 1000) + minutes * 60L;
            date.setTime(seconds * 1000);
            return format.format(date);
        } catch (final Exception e) {
            return null;
        }
    }

    /**
     * 计算指定分钟间隔的日期
     *
     * @param date
     * @param minutes
     * @return
     */
    public static Date getDateByMinutes(final Date date, final int minutes) {
        try {
            final long seconds = (date.getTime() / 1000) + minutes * 60L;
            date.setTime(seconds * 1000);
        } catch (final Exception e) {
            return null;
        }
        return date;
    }

    /**
     * 两个时间之间的天数
     *
     * @param startDate
     * @param endData
     * @return
     */
    public static long getDays(final Date startDate, final Date endData) {
        return (endData.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000L);
    }

    /**
     * 两个时间之间的月差值
     *
     * @param dateStr1
     * @param dateStr2
     * @return
     */
    public static long getMonth(final String dateStr1, final String dateStr2) {
        if (dateStr1 == null || dateStr1.equals("")) {
            return 0;
        }
        if (dateStr2 == null || dateStr2.equals("")) {
            return 0;
        }
        // 转换为标准时间
        final SimpleDateFormat myFormatter = new SimpleDateFormat(DATE_PATTERN_CN_SHORT);
        Date date1 = null;
        Date date2 = null;
        try {
            date1 = myFormatter.parse(dateStr1);
            date2 = myFormatter.parse(dateStr2);
        } catch (final Exception e) {
        }
        final long month = (date2.getTime() - date1.getTime()) / (24 * 30 * 60 * 60 * 1000L);
        return month;
    }

    /**
     * 获取指定日期月份的最后一天
     *
     * @param date 至少包含yyyyMMdd
     * @return
     */
    public static String getLastDateOfMonth(final String date) {
        String str = date.substring(0, 6);
        final String month = date.substring(4, 6);
        final int mon = Integer.parseInt(month);
        if (mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon == 12) {
            str += "31";
        } else if (mon == 4 || mon == 6 || mon == 9 || mon == 11) {
            str += "30";
        } else {
            if (isLeapYear(date)) {
                str += "29";
            } else {
                str += "28";
            }
        }
        str += "235959";
        return str;
    }

    /**
     * 获取指定日期月份的第一天
     *
     * @param date yyyy-MM-dd HH:mm:ss
     * @return
     */
    public static String getFirstDateOfMonth(final String date) {
        String str = date.substring(0, 8);
        str += "01 00:00:00";
        return str;
    }


    /**
     * 获取指定日期月份的最后一天
     *
     * @param date 至少包含yyyy-MM-dd
     * @return
     */
    public static String getLastDayOfMonth(final String date) {
        String str = date.substring(0, 8);
        final String month = date.substring(5, 7);
        final int mon = Integer.parseInt(month);
        if (mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon == 12) {
            str += "31";
        } else if (mon == 4 || mon == 6 || mon == 9 || mon == 11) {
            str += "30";
        } else {
            if (isLeapYear(date)) {
                str += "29";
            } else {
                str += "28";
            }
        }
        return str;
    }

    /**
     * 获取指定日期月份的第一天
     *
     * @param date yyyy-MM-dd HH:mm:ss
     * @return
     */
    public static String getFirstDayOfMonth(final String date) {
        String str = date.substring(0, 8);
        str += "01";
        return str;
    }

    /**
     * 判断是否闰年
     *
     * @param dateStr
     * @return
     */
    public static boolean isLeapYear(final String dateStr) {
        /**
         * 详细设计： 1.被400整除是闰年，否则： 2.不能被4整除则不是闰年 3.能被4整除同时不能被100整除则是闰年
         * 3.能被4整除同时能被100整除则不是闰年
         */
        final Date date = toDate(dateStr, "yyyyMMdd");
        final GregorianCalendar gc = (GregorianCalendar) Calendar.getInstance();
        gc.setTime(date);
        final int year = gc.get(Calendar.YEAR);
        if ((year % 400) == 0) {
            return true;
        } else if ((year % 4) == 0) {
            return (year % 100) != 0;
        } else {
            return false;
        }
    }

    /**
     * 判断二个时间是否在同一个周
     *
     * @param date1
     * @param date2
     * @return
     */
    public static boolean isSameWeekDates(final Date date1, final Date date2) {
        final Calendar cal1 = Calendar.getInstance();
        final Calendar cal2 = Calendar.getInstance();
        cal1.setTime(date1);
        cal2.setTime(date2);
        final int subYear = cal1.get(Calendar.YEAR) - cal2.get(Calendar.YEAR);
        if (0 == subYear) {
            if (cal1.get(Calendar.WEEK_OF_YEAR) == cal2.get(Calendar.WEEK_OF_YEAR)) {
                return true;
            }
        } else if (1 == subYear && 11 == cal2.get(Calendar.MONTH)) {
            // 如果12月的最后一周横跨来年第一周的话则最后一周即算做来年的第一周
            if (cal1.get(Calendar.WEEK_OF_YEAR) == cal2.get(Calendar.WEEK_OF_YEAR)) {
                return true;
            }
        } else if (-1 == subYear && 11 == cal1.get(Calendar.MONTH)) {
            if (cal1.get(Calendar.WEEK_OF_YEAR) == cal2.get(Calendar.WEEK_OF_YEAR)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 校验传入日期字符串格式是否正确
     *
     * @param date
     */
    public static boolean isDate(final String date) {
        SimpleDateFormat formatter;
        if (date == null) {
            return false;
        }
        if (date.length() > 10) {
            formatter = new SimpleDateFormat(DATE_PATTERN_CN);
        } else {
            formatter = new SimpleDateFormat(DATE_PATTERN_CN_SHORT);
        }
        try {
            formatter.parse(date);
            return true;
        } catch (final ParseException pe) {
            return false;
        }
    }

    /**
     * 判断传入日期是否为同一天
     *
     * @param date1
     * @param date2
     * @return
     */
    public static boolean isSameDay(final Date date1, final Date date2) {
        final SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
        return formatter.format(date1).equals(formatter.format(date2));
    }

    /**
     * 比较两个日期是否相等
     *
     * @param d1
     * @param d2
     * @return boolean
     * @author yangyc
     */
    public static boolean compareDate(final Date d1, final Date d2) {
        final SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN_CN);
        final String s1 = sdf.format(d1);
        final String s2 = sdf.format(d2);
        return s1.equals(s2);
    }

    /**
     * 比较两个日期是否相等
     *
     * @param d1
     * @param d2
     * @return boolean
     * @author yangyc
     */
    public static boolean compareDateTime(final Date d1, final Date d2) {
        if (d1 != null && d2 != null) {
            final String s1 = String.valueOf(d1.getTime());
            final String s2 = String.valueOf(d2.getTime());
            return s1.equals(s2);
        } else {
            return d1 == null && d2 == null;
        }
    }

    /**
     * 时间比较  d1是否大于等于d2
     *
     * @param d1
     * @param d2
     * @return
     */
    public static boolean compareTime(final Date d1, final Date d2) {
        if (d1 != null && d2 != null) {
            return d1.getTime() >= d2.getTime();
        } else {
            return false;
        }
    }

    /**
     * 指定日期加天数
     *
     * @param date
     * @param days
     * @return
     * @throws ParseException
     */
    public static Date addDay(final Date date, final int days) throws ParseException {
        final SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN_CN_SHORT);
        final Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.get(Calendar.DAY_OF_MONTH) + days);
        return sdf.parse(sdf.format(calendar.getTime()));
    }

    /**
     * 方法概要:增加日期
     *
     * @param date
     * @param days
     * @return
     */
    public static Date addDays(Date date, final int days) {
        final Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.get(Calendar.DAY_OF_MONTH)
                + days);// 让日期加1
        date = calendar.getTime();
        return date;
    }

    /**
     * 根据所给日期返回两日期相差的秒数
     *
     * @param d1
     * @param d2
     * @return 返回两个日期间隔的毫秒数
     */

    public static long getSecond(final Date d1, final Date d2) {
        final long a1 = d1.getTime();
        final long a2 = d2.getTime();
        final long a3 = (a1 - a2) / 1000;

        return a3;
    }

    /**
     * 根据所秒数,计算相差的时间并以**天**时返回
     *
     * @param
     * @param
     * @return
     */
    public static String getBeapartDayHour(final long m) {
        String beapartdate = "";
        final int nDay = (int) m / (24 * 60 * 60);
        final int nHour = (int) (m - nDay * 24 * 60 * 60) / (60 * 60);
        beapartdate = nDay + "天" + nHour + "小时";
        return beapartdate;
    }

    /**
     * 时间戳
     *
     * @return
     */
    public static String getTimestamp() {
        return String.valueOf(System.currentTimeMillis());
    }

    public static String getTime(final long time) {
        final SimpleDateFormat sdf = new SimpleDateFormat(DATE_PATTERN_CN);
        final String date = sdf.format(new Date(time * 1000L));
        return date;
    }

    /**
     * 获取某年/月/周第一天日期
     *
     * @return Date
     */
    public static String getDateFirstDay(String date, final String type) {
        int year, month;
        // 设置日期格式
        final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        if (type.equals("year")) {
            // 获取年份数字
            year = Integer.parseInt(date.substring(0, 4));

            final Calendar calendar = Calendar.getInstance();
            calendar.clear();
            calendar.set(Calendar.YEAR, year);
            final Date currYearFirst = calendar.getTime();
            date = df.format(currYearFirst);
        } else if (type.equals("month")) {
            // 获取年份、月份数字
            year = Integer.parseInt(date.substring(0, 4));
            month = Integer.parseInt(date.substring(5, 7));

            final Calendar cal = Calendar.getInstance();
            cal.set(Calendar.YEAR, year);
            cal.set(Calendar.MONTH, month - 1);
            cal.set(Calendar.DAY_OF_MONTH, cal.getMinimum(Calendar.DATE));
            date = df.format(cal.getTime());
        } else if (type.equals("week")) {
            final Calendar calendar = new GregorianCalendar();
            calendar.setFirstDayOfWeek(Calendar.MONDAY);

            final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            try {
                final Date newDate = sdf.parse(date);
                calendar.setTime(newDate);
            } catch (final ParseException e) {
                e.printStackTrace();
            }
            calendar.set(Calendar.DAY_OF_WEEK, calendar.getFirstDayOfWeek());
            final Date currWeekFirst = calendar.getTime();
            date = df.format(currWeekFirst);
        }
        return date;
    }

    /**
     * 获取某年/月/周最后一天日期
     *
     * @return Date
     */
    public static String getDateLastDay(String date, final String type) {
        int year, month;
        // 设置日期格式
        final SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        if (type.equals("year")) {
            // 获取年份数字
            year = Integer.parseInt(date.substring(0, 4));

            final Calendar calendar = Calendar.getInstance();
            calendar.clear();
            calendar.set(Calendar.YEAR, year);
            calendar.roll(Calendar.DAY_OF_YEAR, -1);
            final Date currYearLast = calendar.getTime();
            date = df.format(currYearLast);
        } else if (type.equals("month")) {
            // 获取年份、月份数字
            year = Integer.parseInt(date.substring(0, 4));
            month = Integer.parseInt(date.substring(5, 7));

            final Calendar cal = Calendar.getInstance();
            cal.set(Calendar.YEAR, year);
            cal.set(Calendar.MONTH, month - 1);
            cal.set(Calendar.DAY_OF_MONTH, 1);
            final int value = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
            cal.set(Calendar.DAY_OF_MONTH, value);
            date = df.format(cal.getTime());
        } else if (type.equals("week")) {
            final Calendar calendar = new GregorianCalendar();
            calendar.setFirstDayOfWeek(Calendar.MONDAY);
            final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            try {
                final Date newDate = sdf.parse(date);
                calendar.setTime(newDate);
            } catch (final ParseException e) {
                e.printStackTrace();
            }
            calendar.set(Calendar.DAY_OF_WEEK, calendar.getFirstDayOfWeek() + 6);
            final Date currWeekLast = calendar.getTime();
            date = df.format(currWeekLast);
        }
        return date;
    }

    /**
     * 返回指定年季的季的第一天
     *
     * @param year
     * @param quarter
     * @return
     */
    public static String getFirstDayOfQuarter(final Integer year, final Integer quarter) {
        final Calendar calendar = Calendar.getInstance();
        String month = "";
        if (quarter == 1) {
            month = "01";
        } else if (quarter == 2) {
            month = "04";
        } else if (quarter == 3) {
            month = "07";
        } else if (quarter == 4) {
            month = "10";
        } else {
            month = calendar.get(Calendar.MONTH) + "";
        }
        return getDateFirstDay(year + "-" + month, "month");
    }

    /**
     * 返回指定年季的季的最后一天
     *
     * @param year
     * @param quarter
     * @return
     */
    public static String getLastDayOfQuarter(final Integer year, final Integer quarter) {
        final Calendar calendar = Calendar.getInstance();
        String month = "";
        if (quarter == 1) {
            month = "03";
        } else if (quarter == 2) {
            month = "06";
        } else if (quarter == 3) {
            month = "09";
        } else if (quarter == 4) {
            month = "12";
        } else {
            month = calendar.get(Calendar.MONTH) + "";
        }
        return getDateLastDay(year + "-" + month, "month");
    }

    /**
     * 趋势统计格式化
     */
    public static List<Map<String, Object>> dataFormat(final List<Map<String, Object>> data,
                                                       final String type, final int startYear, final Boolean cumulative) {
        final List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();

        if (data.size() > 0) {
//            int total = 0;
            int value = 0;
            int lastNum = Integer.parseInt(data.get(data.size() - 1).get("num").toString());
            // 按月、季度统计
            if (type.equals("month") || type.equals("quarter")) {
                final Calendar date = Calendar.getInstance();
                final int year = date.get(Calendar.YEAR);
                final int month = date.get(Calendar.MONTH) + 1;
                if (type.equals("month")) {
                    if (year == startYear) {
                        value = month;
                    } else {
                        value = 12;
                    }
                } else {
                    if (year == startYear) {
                        value = (int) Math.ceil(month / 3);
                    } else {
                        value = 4;
                    }
                }
                for (int i = 1; i <= value; i++) {
                    String m = String.valueOf(i);
                    if (type.equals("month")) {
                        m = m.length() == 2 ? m : "0" + i;
                    }

                    final Map<String, Object> temp = new HashMap<String, Object>();
                    temp.put("name", m);
                    if (cumulative) {
                        temp.put("num", lastNum);
                    } else {
                        temp.put("num", 0);
                    }

                    for (final Map<String, Object> map : data) {
                        if (map.get("name").toString().endsWith(m) &&
                                map.get("name").toString().startsWith(startYear + "")) {
                            lastNum = Integer.parseInt(map.get("num").toString());
                            temp.put("num", map.get("num"));
//                            total += Integer.parseInt(map.get("num").toString());
                        }
                    }
                    result.add(temp);
                }
            }
            // 按年统计
            else {
                final Calendar date = Calendar.getInstance();
                final int year = Integer.parseInt(String.valueOf(date.get(Calendar.YEAR)));
                for (int i = startYear; i <= year; i++) {
                    final Map<String, Object> temp = new HashMap<String, Object>();
                    temp.put("name", i);
                    if (cumulative) {
                        temp.put("num", lastNum);
                    } else {
                        temp.put("num", 0);
                    }
                    for (final Map<String, Object> map : data) {
                        if (map.get("name").toString().equals(i + "")) {
                            lastNum = Integer.parseInt(map.get("num").toString());
                            temp.put("num", map.get("num"));
//                            total += Integer.parseInt(map.get("num").toString());
                        }
                    }
                    result.add(temp);
                }
            }

//            Map<String, Object> temp = new HashMap<String, Object>();
//            temp.put("name", "总数");
//            temp.put("num", total);
//            result.add(temp);
        }

        return result;
    }

    /**
     * 获得本月第一天0点时间
     *
     * @return
     */
    public static Date getTimesMonthStart() {
        final Calendar cal = Calendar.getInstance();
        cal.set(cal.get(Calendar.YEAR), cal.get(Calendar.MONDAY), cal.get(Calendar.DAY_OF_MONTH), 0, 0, 0);
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMinimum(Calendar.DAY_OF_MONTH));
        return cal.getTime();
    }

    /**
     * 获得本月最后一天24点时间
     *
     * @return
     */
    public static Date getTimesMonthEnd() {
        final Calendar cal = Calendar.getInstance();
        cal.set(cal.get(Calendar.YEAR), cal.get(Calendar.MONDAY), cal.get(Calendar.DAY_OF_MONTH), 0, 0, 0);
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
        cal.set(Calendar.HOUR_OF_DAY, 24);
        return cal.getTime();
    }

    /**
     * 获得本年第一天0点时间
     *
     * @return
     */
    public static Date getTimesYearStart() {
        final Calendar cal = Calendar.getInstance();
        cal.set(cal.get(Calendar.YEAR), cal.get(Calendar.MONDAY), cal.get(Calendar.DAY_OF_MONTH), 0, 0, 0);
        cal.set(Calendar.MONTH, Calendar.JANUARY);
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMinimum(Calendar.DAY_OF_MONTH));
        return cal.getTime();
    }

    /**
     * 获得本年最后一天24点时间
     *
     * @return
     */
    public static Date getTimesYearEnd() {
        final Calendar cal = Calendar.getInstance();
        cal.set(cal.get(Calendar.YEAR), cal.get(Calendar.MONDAY), cal.get(Calendar.DAY_OF_MONTH), 0, 0, 0);
        cal.set(Calendar.MONTH, Calendar.DECEMBER);
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
        cal.set(Calendar.HOUR_OF_DAY, 24);
        return cal.getTime();
    }


}
